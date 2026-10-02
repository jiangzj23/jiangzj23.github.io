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
    const firstLine = document.createElement("span");
    firstLine.textContent = `${profile.bio.intro} `;

    const labLink = document.createElement("a");
    labLink.href = profile.bio.lab.url;
    labLink.textContent = profile.bio.lab.label;
    labLink.target = "_blank";
    labLink.rel = "noreferrer";

    const affiliation = document.createTextNode(` ${profile.bio.affiliation}`);
    const before = document.createElement("span");
    before.className = "bio-before";
    before.textContent = profile.bio.before;

    bio.replaceChildren(
      firstLine,
      labLink,
      affiliation,
      document.createElement("br"),
      before,
    );
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

function renderPublications() {
  const list = $("#publication-list");
  if (!list) return;
  if (!SITE_CONTENT.publications.length) {
    list.innerHTML =
      '<p class="empty-state reveal">Publications will be added here.</p>';
    return;
  }

  list.innerHTML = SITE_CONTENT.publications
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
      const abstractId = `publication-abstract-${index}`;
      const abstractButton = publication.abstract
        ? `<button class="publication-abstract-toggle" type="button" aria-expanded="false" aria-controls="${abstractId}">+ Abstract</button>`
        : "";
      const abstract = publication.abstract
        ? `<div class="publication-abstract" id="${abstractId}" hidden><p>${escapeHtml(publication.abstract)}</p></div>`
        : "";
      const award = publication.award
        ? `<p class="publication-award">${escapeHtml(publication.award)}</p>`
        : "";
      const media = renderPublicationMedia(publication);
      return `
        <article class="publication-item reveal">
          <figure class="publication-media">${media}</figure>
          <div class="publication-main">
            <h2>${escapeHtml(publication.title)}</h2>
            <p class="publication-authors">${authors}</p>
            <p class="publication-venue"><em>${escapeHtml(publication.venue)}</em></p>
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

function renderProjects() {
  const grid = $("#project-grid");
  if (!grid) return;
  if (!SITE_CONTENT.projects.length) {
    grid.innerHTML =
      '<p class="empty-state reveal">Research projects will be added here.</p>';
    return;
  }

  grid.innerHTML = SITE_CONTENT.projects
    .map((project) => {
      const projectUrl = safeUrl(project.url);
      const link = projectUrl
        ? `<a class="project-link" href="${escapeHtml(projectUrl)}" target="_blank" rel="noreferrer">View ↗</a>`
        : "";
      const tags = (project.tags || [])
        .map((tag) => `<span>${escapeHtml(tag)}</span>`)
        .join("");
      return `
        <article class="project-card reveal">
          <div class="project-topline"><span class="project-symbol">✦</span>${link}</div>
          <h2>${escapeHtml(project.title)}</h2>
          <p>${escapeHtml(project.description)}</p>
          <div class="project-tags">${tags}</div>
        </article>`;
    })
    .join("");
}

function renderNews() {
  const list = $("#news-list");
  if (!list) return;
  if (!SITE_CONTENT.news.length) {
    list.innerHTML =
      '<li class="empty-state reveal">Updates will be added here.</li>';
    return;
  }
  list.innerHTML = SITE_CONTENT.news
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
      const paperList = papers
        ? `<ol class="news-papers">${papers}</ol>`
        : "";
      return `
        <li class="news-item reveal">
          <time class="news-date">${escapeHtml(item.date)}</time>
          <div class="news-content">
            <p>${escapeHtml(item.text)}</p>
            ${paperList}
          </div>
        </li>`;
    })
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
    .map((item) => {
      const imageUrl = safeUrl(item.image);
      const itemUrl = safeUrl(item.url);
      const image = imageUrl
        ? `<div class="life-card-image"><img src="${escapeHtml(imageUrl)}" alt="" loading="lazy" /></div>`
        : "";
      const link = itemUrl
        ? `<a class="life-card-link" href="${escapeHtml(itemUrl)}" target="_blank" rel="noreferrer">Read more ↗</a>`
        : "";
      return `
        <article class="life-card">
          ${image}
          <div class="life-card-content">
            <div class="life-card-meta"><span>${escapeHtml(item.type || "Note")}</span><time>${escapeHtml(item.date || "")}</time></div>
            <h2>${escapeHtml(item.title)}</h2>
            <p>${escapeHtml(item.text)}</p>
            ${link}
          </div>
        </article>`;
    })
    .join("");
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

function setupTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.dataset.theme =
    savedTheme || (prefersDark ? "dark" : "light");
  const themeToggle = $(".theme-toggle");
  if (!themeToggle) return;
  themeToggle.addEventListener("click", () => {
    const nextTheme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  });
}

renderProfile();
renderPublications();
renderProjects();
renderNews();
renderLife();
setupNavigation();
setupTheme();
document.querySelectorAll(".current-year").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
