/* global SITE_CONTENT */

const $ = (selector, root = document) => root.querySelector(selector);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeUrl(value) {
  if (!value) return "";
  const url = String(value).trim();
  return /^(https?:\/\/|mailto:|assets\/|\.\/)/i.test(url) ? url : "";
}

function renderProfile() {
  const { profile, links } = SITE_CONTENT;
  const bio = $("#profile-bio");
  const location = $("#profile-location");
  const initials = $("#portrait-initials");
  if (bio) {
    const firstLine = document.createElement("p");
    firstLine.textContent = `${profile.bio.intro} `;
    const bioLink = (item) => {
      const link = document.createElement("a");
      link.textContent = item.label;
      const url = safeUrl(item.url);
      if (url) link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      return link;
    };
    firstLine.append(
      document.createTextNode(profile.bio.university.label),
      document.createTextNode(", working with "),
      bioLink(profile.bio.advisor),
      document.createTextNode(" in the "),
      document.createTextNode(profile.bio.lab.label),
      document.createTextNode("."),
    );
    const research = document.createElement("p");
    research.textContent = profile.bio.research;
    const background = document.createElement("p");
    background.textContent = profile.bio.background;
    bio.replaceChildren(firstLine, research, background);
  }
  if (location) location.textContent = profile.location;
  if (initials) initials.textContent = profile.initials;

  const image = $("#profile-image");
  const imageUrl = safeUrl(profile.image);
  if (image && imageUrl) {
    image.src = imageUrl;
    image.hidden = false;
    if (initials) initials.hidden = true;
  }

  const cvLink = $("#cv-link");
  const cvUrl = safeUrl(profile.cv);
  if (cvLink && cvUrl) {
    cvLink.href = cvUrl;
    cvLink.hidden = false;
  }

  const emailLink = $("#email-link");
  if (emailLink) {
    if (profile.email) {
      emailLink.href = `mailto:${profile.email}`;
    } else {
      emailLink.textContent = "Add email in content.js";
      emailLink.removeAttribute("href");
    }
  }

  const linkedinLink = $("#linkedin-link");
  const linkedin = links.find((link) => link.label === "LinkedIn");
  if (linkedinLink && safeUrl(linkedin?.url)) {
    linkedinLink.href = safeUrl(linkedin.url);
  }

  const socialLinks = $("#social-links");
  if (socialLinks) {
    socialLinks.innerHTML = links
      .filter((link) => safeUrl(link.url))
      .map(
        (link) => {
          const url = safeUrl(link.url);
          const externalAttributes = url.startsWith("mailto:")
            ? ""
            : ' target="_blank" rel="noreferrer"';
          return `<a href="${escapeHtml(url)}"${externalAttributes} aria-label="${escapeHtml(link.label)}" title="${escapeHtml(link.label)}"><img src="${escapeHtml(safeUrl(link.icon))}" alt="" /></a>`;
        },
      )
      .join("");
  }
}

function renderPublicationMedia(publication) {
  const media = publication.media || {};
  const type = String(media.type || "").toLowerCase();
  const src = safeUrl(media.src);
  const url = safeUrl(media.url);
  const poster = safeUrl(media.poster);
  const alt = escapeHtml(media.alt || `${publication.title} media`);

  if (type === "video" && src) {
    const posterAttribute = poster
      ? ` poster="${escapeHtml(poster)}"`
      : "";
    return `<video controls preload="metadata"${posterAttribute} aria-label="${alt}"><source src="${escapeHtml(src)}" /></video>`;
  }

  if (["teaser", "image", "slides"].includes(type) && src) {
    const image = `<img src="${escapeHtml(src)}" alt="${alt}" loading="lazy" />`;
    return url
      ? `<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${image}</a>`
      : image;
  }

  if (type === "slides" && url) {
    return `<a class="publication-media-placeholder" href="${escapeHtml(url)}" target="_blank" rel="noreferrer"><span>View slides</span></a>`;
  }

  return '<div class="publication-media-placeholder"><span>Teaser / Video / Slides</span></div>';
}

function renderRecentWork() {
  const list = $("#home-work-list");
  if (!list) return;
  list.innerHTML = SITE_CONTENT.publications.slice(0, 4)
    .map((publication) => {
      const authors = publication.authors.map((author) =>
        author === SITE_CONTENT.profile.name
          ? `<strong>${escapeHtml(author)}</strong>`
          : escapeHtml(author),
      ).join(", ");
      const paper = (publication.links || []).find((link) =>
        link.label.toLowerCase() === "pdf" && safeUrl(link.url),
      ) || (publication.links || []).find((link) =>
        link.label.toLowerCase() === "data story" && safeUrl(link.url),
      ) || (publication.links || []).find((link) => safeUrl(link.url));
      const paperLabel = paper?.label.toLowerCase() === "pdf"
        ? "PDF"
        : paper?.label.toLowerCase() === "data story" ? "Data Story" : "Paper";
      const paperLink = paper
        ? `<a class="selected-paper-link" href="${escapeHtml(safeUrl(paper.url))}" target="_blank" rel="noopener noreferrer">${paperLabel}</a>`
        : "";
      const award = publication.award?.includes("Honorable Mention")
        ? '<strong class="selected-award-inline">🏆 Honorable Mention</strong>'
        : "";
      return `
        <article class="selected-publication">
          <figure class="publication-media selected-media">
            ${renderPublicationMedia(publication)}
            <span class="selected-conference">${escapeHtml(publication.venue.replace(/^IEEE\s+/, ""))} ${escapeHtml(publication.year)}</span>
          </figure>
          <div class="selected-publication-main">
            <h3>${escapeHtml(publication.title)}${paperLink ? ` ${paperLink}` : ""}${award ? ` ${award}` : ""}</h3>
            <p class="selected-authors">${authors}</p>
          </div>
        </article>`;
    })
    .join("");
}

function renderPublications() {
  const list = $("#publication-list");
  if (!list) return;
  renderPublicationList(list, SITE_CONTENT.publications);
}

function renderPublicationList(list, publications, prefix = "publication", heading = "h2") {
  if (!publications.length) {
    list.innerHTML =
      '<p class="empty-state reveal">Publications will be added here.</p>';
    return;
  }

  list.innerHTML = publications
    .map((publication, index) => {
      const authors = publication.authors
        .map((author, authorIndex) => {
          const name =
            author === SITE_CONTENT.profile.name
              ? `<strong class="publication-self">${escapeHtml(author)}</strong>`
              : escapeHtml(author);
          if (
            authorIndex === publication.authors.length - 1 &&
            authorIndex > 0
          ) {
            return `${publication.authors.length > 2 ? "," : ""} and ${name}`;
          }
          return `${authorIndex > 0 ? ", " : ""}${name}`;
        })
        .join("");
      const links = (publication.links || [])
        .filter((link) => safeUrl(link.url))
        .map(
          (link) =>
            `<a href="${escapeHtml(safeUrl(link.url))}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`,
        )
        .join("");
      const abstractId = `${prefix}-abstract-${index}`;
      const abstractButton = publication.abstract
        ? `<button class="publication-abstract-toggle" type="button" aria-expanded="false" aria-controls="${abstractId}">+ Abstract</button>`
        : "";
      const abstract = publication.abstract
        ? `<div class="publication-abstract" id="${abstractId}" hidden><p>${escapeHtml(publication.abstract)}</p></div>`
        : "";
      const inlineAward = publication.award && publication.track
        ? ` · <strong class="publication-award-inline">${escapeHtml(publication.award)}</strong>`
        : "";
      const award = publication.award && !publication.track
        ? `<p class="publication-award">${escapeHtml(publication.award)}</p>`
        : "";
      const media = renderPublicationMedia(publication);
      const publicationYear = publication.publicationYear ?? publication.year;
      const trackUrl = safeUrl(publication.trackUrl);
      const track = publication.track
        ? trackUrl
          ? `<a class="publication-track-link" href="${escapeHtml(trackUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(publication.track)}</a>`
          : escapeHtml(publication.track)
        : "";
      const venueDetails = [
        track,
        publication.status ? escapeHtml(publication.status) : "",
      ].filter(Boolean).join(" · ");
      const venueHeading = [publication.venue, publicationYear]
        .filter(Boolean).map(escapeHtml).join(" ");
      const eventDetails = [publication.conference, publication.location]
        .filter(Boolean)
        .map(escapeHtml)
        .join(" | ");
      return `
        <article class="publication-item reveal" id="${prefix}-${index}">
          <figure class="publication-media">${media}</figure>
          <div class="publication-main">
            <${heading} class="publication-title">${escapeHtml(publication.title)}</${heading}>
            <p class="publication-authors">${authors}</p>
            <p class="publication-venue"><em>${venueHeading}</em>${eventDetails ? ` | ${eventDetails}` : ""}${venueDetails ? ` · ${venueDetails}` : ""}${inlineAward}</p>
            ${award}
            <div class="publication-links">${abstractButton}${links}</div>
            ${abstract}
          </div>
        </article>`;
    })
    .join("");

  list.querySelectorAll(".publication-abstract-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      button.setAttribute("aria-expanded", String(!isOpen));
      button.textContent = isOpen ? "+ Abstract" : "− Abstract";
      if (panel) panel.hidden = isOpen;
    });
  });
}

function renderSkills() {
  const container = $("#skills-content");
  const skills = SITE_CONTENT.skills;
  if (!container || !skills) return;
  container.innerHTML = `
    <p><strong>Languages:</strong> ${(skills.languages || []).map(escapeHtml).join(", ")}</p>
    <ul>${(skills.technical || []).map((skill) => {
      const text = `<strong>${escapeHtml(skill.category)}:</strong> ${(skill.items || []).map(escapeHtml).join(", ")}`;
      return `<li>${skill.strikethrough ? `<s>${text}</s>` : text}${skill.note ? ` <span>${escapeHtml(skill.note)}</span>` : ""}</li>`;
    }).join("")}</ul>`;
}

function renderProjects() {
  const grid = $("#project-grid");
  if (!grid) return;
  if (!SITE_CONTENT.projects.length) {
    grid.innerHTML =
      '<p class="empty-state reveal">Research projects will be added here.</p>';
    return;
  }

  grid.innerHTML = SITE_CONTENT.projects
    .map((project, projectIndex) => {
      const tags = (project.tags || [])
        .map((tag) => `<span>${escapeHtml(tag)}</span>`)
        .join("");
      const galleryImages = (project.gallery || []).map(safeUrl).filter(Boolean);
      const firstSlide = Math.max(0, galleryImages.indexOf(safeUrl(project.image)));
      const abstractId = `project-abstract-${projectIndex}`;
      const abstract = project.description
        ? `<div class="project-abstract-overlay" id="${abstractId}" hidden><p>${escapeHtml(project.description)}</p></div>`
        : "";
      const abstractButton = project.description
        ? `<button class="project-abstract-toggle" type="button" aria-expanded="false" aria-controls="${abstractId}">+ Abstract</button>`
        : "";
      const gallery = galleryImages.length
        ? `<div class="project-carousel" data-project-index="${projectIndex}" role="region" aria-label="${escapeHtml(project.title)} slides" tabindex="0">
            <a class="project-media" href="${escapeHtml(galleryImages[firstSlide])}" target="_blank" rel="noopener noreferrer" aria-label="Open current slide in full size">
              <img src="${escapeHtml(galleryImages[firstSlide])}" alt="${escapeHtml(project.title)} — slide ${firstSlide + 1}" loading="lazy" />
            </a>
            <div class="project-carousel-controls">
              <button type="button" class="project-slide-prev" aria-label="Previous slide">←</button>
              <span class="project-slide-count" aria-live="polite" aria-atomic="true">${firstSlide + 1} / ${galleryImages.length}</span>
              <button type="button" class="project-slide-next" aria-label="Next slide">→</button>
            </div>
            ${abstract}
          </div>`
        : `<div class="project-carousel">${abstract}</div>`;
      return `
        <article class="project-card reveal">
          <h2>${escapeHtml(project.title)}</h2>
          <div class="project-tags">${tags}${abstractButton}</div>
          ${gallery}
        </article>`;
    })
    .join("");
  grid.querySelectorAll(".project-abstract-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      button.setAttribute("aria-expanded", String(!isOpen));
      button.textContent = isOpen ? "+ Abstract" : "− Abstract";
      panel.hidden = isOpen;
      panel.parentElement.classList.toggle("is-abstract-open", !isOpen);
    });
  });
  grid.querySelectorAll(".project-carousel").forEach((carousel) => {
    if (!carousel.dataset.projectIndex) return;
    const project = SITE_CONTENT.projects[Number(carousel.dataset.projectIndex)];
    const slides = (project.gallery || []).map(safeUrl).filter(Boolean);
    let current = Math.max(0, slides.indexOf(safeUrl(project.image)));
    const image = carousel.querySelector("img");
    const imageLink = carousel.querySelector(".project-media");
    const count = carousel.querySelector(".project-slide-count");
    const showSlide = (step) => {
      current = (current + step + slides.length) % slides.length;
      image.src = slides[current];
      image.alt = `${project.title} — slide ${current + 1}`;
      imageLink.href = slides[current];
      count.textContent = `${current + 1} / ${slides.length}`;
    };
    carousel.querySelector(".project-slide-prev").addEventListener("click", () => showSlide(-1));
    carousel.querySelector(".project-slide-next").addEventListener("click", () => showSlide(1));
    carousel.addEventListener("keydown", (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        showSlide(event.key === "ArrowLeft" ? -1 : 1);
      }
    });
  });
}

function renderNews() {
  const list = $("#news-list");
  if (!list) return;
  if (!SITE_CONTENT.news.length) {
    list.innerHTML =
      '<li class="empty-state reveal">Updates will be added here.</li>';
    return;
  }
  const isHome = document.body.classList.contains("home-page");
  const news = isHome ? SITE_CONTENT.news.slice(0, 3) : SITE_CONTENT.news;
  list.innerHTML = news
    .map((item) => {
      const papers = (item.papers || [])
        .map((paper) => {
          const authors = paper.authors.map((author, index) => {
            const name =
              author === SITE_CONTENT.profile.name
                ? `<span class="news-paper-self">${escapeHtml(author)}</span>`
                : escapeHtml(author);
            if (index === paper.authors.length - 1 && index > 0) {
              return `${paper.authors.length > 2 ? "," : ""} and ${name}`;
            }
            return `${index > 0 ? ", " : ""}${name}`;
          });
          return `
            <li>
              <span class="news-paper-title">${escapeHtml(paper.title)}</span>
              <span class="news-paper-authors">${authors.join("")}</span>
            </li>`;
        })
        .join("");
      const paperList = papers && !isHome
        ? `<ol class="news-papers">${papers}</ol>`
        : "";
      const imageUrl = safeUrl(item.image);
      const newsImage = imageUrl
        ? ` <img class="news-inline-image" src="${escapeHtml(imageUrl)}" alt="${escapeHtml(item.imageAlt || "")}" loading="lazy" />`
        : "";
      const markerIndex = item.imageAfter ? item.text.indexOf(item.imageAfter) : -1;
      const beforeIndex = item.imageBefore ? item.text.indexOf(item.imageBefore) : -1;
      const insertionIndex = beforeIndex >= 0 ? beforeIndex : markerIndex >= 0
        ? markerIndex + item.imageAfter.length
        : item.text.length;
      const newsText = `${escapeHtml(item.text.slice(0, insertionIndex))}${newsImage}${newsImage && beforeIndex >= 0 ? " " : ""}${escapeHtml(item.text.slice(insertionIndex))}`;
      return `
        <li class="news-item reveal">
          <time class="news-date">${escapeHtml(item.date)}</time>
          <div class="news-content">
            <p>${newsText}</p>
            ${paperList}
          </div>
        </li>`;
    })
    .join("");
}

function lifeMediaItems(item) {
  const media = item.media || (item.image
    ? [{ type: "image", src: item.image, alt: item.title }]
    : []);
  return media.filter((entry) =>
    ["image", "video", "drive", "youtube"].includes(entry.type) && safeUrl(entry.src),
  );
}

function renderLifeMedia(media, title) {
  const src = escapeHtml(safeUrl(media.src));
  const alt = escapeHtml(media.alt || title);
  if (media.type === "image") {
    return `<a href="${src}" target="_blank" rel="noopener noreferrer"><img src="${src}" alt="${alt}" loading="lazy" /></a>`;
  }
  if (media.type === "video") {
    const poster = safeUrl(media.poster);
    return `<video controls preload="metadata" aria-label="${alt}"${poster ? ` poster="${escapeHtml(poster)}"` : ""}><source src="${src}" /></video>`;
  }
  return `<iframe${media.type === "youtube" ? ' class="life-youtube-player"' : ""} src="${src}" title="${alt}" loading="lazy" allow="fullscreen; picture-in-picture; encrypted-media" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
}

function renderAcademicService() {
  const list = $("#academic-service-list");
  if (!list) return;

  list.innerHTML = (SITE_CONTENT.academicService || [])
    .map((service) => `
      <div>
        <dt>${escapeHtml(service.role)}:</dt>
        <dd>${(service.organizations || []).map(escapeHtml).join(", ")}</dd>
      </div>`)
    .join("");
}

function renderLife() {
  const grid = $("#life-grid");
  if (!grid) return;
  if (!SITE_CONTENT.life.length) {
    grid.innerHTML =
      '<p class="empty-state life-empty">Life notes, photos, and wandering thoughts will live here.</p>';
    return;
  }

  grid.innerHTML = SITE_CONTENT.life
    .map((item, index) => {
      const media = lifeMediaItems(item);
      const itemUrl = safeUrl(item.url);
      const controls = media.length > 1
        ? `<div class="project-carousel-controls life-carousel-controls">
            <button type="button" class="life-slide-prev" aria-label="Previous photo">←</button>
            <span class="project-slide-count" aria-live="polite" aria-atomic="true">1 / ${media.length}</span>
            <button type="button" class="life-slide-next" aria-label="Next photo">→</button>
          </div>`
        : "";
      const meta = [item.location, item.date].filter(Boolean).map(escapeHtml).join(" · ");
      const creditUrl = safeUrl(item.credit?.url);
      const credit = item.credit?.text
        ? `<div class="life-card-meta life-media-credit">${escapeHtml(item.credit.text)}${creditUrl ? ` <a href="${escapeHtml(creditUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.credit.creator || "Watch on YouTube")} ↗</a> · YouTube` : ""}</div>`
        : "";
      const link = itemUrl
        ? `<a class="life-card-link" href="${escapeHtml(itemUrl)}" target="_blank" rel="noopener noreferrer">Read more ↗</a>`
        : "";
      return `
        <article class="life-card">
          <div class="life-carousel" data-life-index="${index}"${media.length > 1 ? ` role="region" aria-label="${escapeHtml(item.title)} photos" tabindex="0"` : ""}>
            <div class="life-media">${media.length
              ? renderLifeMedia(media[0], item.title)
              : '<div class="life-media-placeholder"><span>Coming soon</span></div>'}</div>
            ${controls}
          </div>
          <div class="life-card-content">
            ${meta ? `<div class="life-card-meta">${meta}</div>` : ""}
            ${credit}
            <h2>${escapeHtml(item.title)}</h2>
            ${item.text ? `<p>${escapeHtml(item.text)}</p>` : ""}
            ${link}
          </div>
        </article>`;
    })
    .join("");

  grid.querySelectorAll(".life-carousel").forEach((carousel) => {
    const item = SITE_CONTENT.life[Number(carousel.dataset.lifeIndex)];
    const media = lifeMediaItems(item);
    if (media.length < 2) return;
    let current = 0;
    const showSlide = (step) => {
      current = (current + step + media.length) % media.length;
      carousel.querySelector(".life-media").innerHTML = renderLifeMedia(media[current], item.title);
      carousel.querySelector(".project-slide-count").textContent = `${current + 1} / ${media.length}`;
    };
    carousel.querySelector(".life-slide-prev").addEventListener("click", () => showSlide(-1));
    carousel.querySelector(".life-slide-next").addEventListener("click", () => showSlide(1));
    carousel.addEventListener("keydown", (event) => {
      if (event.target !== carousel || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        showSlide(event.key === "ArrowLeft" ? -1 : 1);
      }
    });
  });
}

function setupNavigation() {
  const menuButton = $(".menu-toggle");
  const navigation = $("#site-nav");
  if (!menuButton || !navigation) return;
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("open", !isOpen);
  });
}

function setupLanguageSwitcher() {
  const switcher = $(".language-switcher");
  if (!switcher) return;
  document.addEventListener("click", (event) => {
    if (!switcher.contains(event.target)) switcher.open = false;
  });
  switcher.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && switcher.open) {
      switcher.open = false;
      switcher.querySelector("summary").focus();
    }
  });
}

renderProfile();
renderRecentWork();
renderPublications();
renderSkills();
renderProjects();
renderNews();
renderAcademicService();
renderLife();
setupNavigation();
setupLanguageSwitcher();
document.querySelectorAll(".current-year").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
