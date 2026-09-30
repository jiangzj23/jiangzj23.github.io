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
  document.title = profile.name;
  $(".wordmark-name").textContent = profile.name;
  $("#profile-role").textContent = profile.role;
  $("#profile-bio").textContent = profile.bio;
  $("#profile-location").textContent = profile.location;
  $("#portrait-initials").textContent = profile.initials;

  const imageUrl = safeUrl(profile.image);
  if (imageUrl) {
    const image = $("#profile-image");
    image.src = imageUrl;
    image.hidden = false;
    $("#portrait-initials").hidden = true;
  }

  const cvUrl = safeUrl(profile.cv);
  if (cvUrl) {
    const cvLink = $("#cv-link");
    cvLink.href = cvUrl;
    cvLink.hidden = false;
  }

  const emailLink = $("#email-link");
  if (profile.email) {
    emailLink.href = `mailto:${profile.email}`;
  } else {
    emailLink.textContent = "Add email in content.js";
    emailLink.removeAttribute("href");
  }

  $("#social-links").innerHTML = links
    .filter((link) => safeUrl(link.url))
    .map(
      (link) =>
        `<a href="${escapeHtml(safeUrl(link.url))}" target="_blank" rel="noreferrer">${escapeHtml(link.label)} ↗</a>`,
    )
    .join("");
}

function renderInterests() {
  $("#interest-grid").innerHTML = SITE_CONTENT.interests
    .map(
      (interest, index) => `
        <article class="interest-card reveal">
          <span class="interest-index">0${index + 1}</span>
          <h3>${escapeHtml(interest.title)}</h3>
          <p>${escapeHtml(interest.description)}</p>
        </article>`,
    )
    .join("");
}

function renderPublications() {
  const list = $("#publication-list");
  if (!SITE_CONTENT.publications.length) {
    list.innerHTML =
      '<p class="empty-state reveal">Publications will be added here.</p>';
    return;
  }

  list.innerHTML = SITE_CONTENT.publications
    .map((publication) => {
      const links = (publication.links || [])
        .filter((link) => safeUrl(link.url))
        .map(
          (link) =>
            `<a href="${escapeHtml(safeUrl(link.url))}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`,
        )
        .join("");

      return `
        <article class="publication-item reveal">
          <span class="publication-year">${escapeHtml(publication.year)}</span>
          <div>
            <h3>${escapeHtml(publication.title)}</h3>
            <p class="publication-meta">${escapeHtml(publication.authors)} · <em>${escapeHtml(publication.venue)}</em></p>
          </div>
          <div class="publication-links">${links}</div>
        </article>`;
    })
    .join("");
}

function renderProjects() {
  const grid = $("#project-grid");
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
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.description)}</p>
          <div class="project-tags">${tags}</div>
        </article>`;
    })
    .join("");
}

function renderNews() {
  const list = $("#news-list");
  if (!SITE_CONTENT.news.length) {
    list.innerHTML =
      '<li class="empty-state reveal">Updates will be added here.</li>';
    return;
  }
  list.innerHTML = SITE_CONTENT.news
    .map(
      (item) => `
        <li class="news-item reveal">
          <time class="news-date">${escapeHtml(item.date)}</time>
          <p>${escapeHtml(item.text)}</p>
        </li>`,
    )
    .join("");
}

function setupNavigation() {
  const menuButton = $(".menu-toggle");
  const navigation = $("#site-nav");
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("open", !isOpen);
  });
  navigation.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      navigation.classList.remove("open");
    }
  });
  window.addEventListener("scroll", () =>
    $(".site-header").classList.toggle("scrolled", window.scrollY > 12),
  );
}

function setupTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.dataset.theme =
    savedTheme || (prefersDark ? "dark" : "light");
  $(".theme-toggle").addEventListener("click", () => {
    const nextTheme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  });
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 },
  );
  document
    .querySelectorAll(".reveal")
    .forEach((element) => observer.observe(element));
}

renderProfile();
renderInterests();
renderPublications();
renderProjects();
renderNews();
setupNavigation();
setupTheme();
setupReveal();
$("#current-year").textContent = new Date().getFullYear();
