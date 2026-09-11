(function () {
  "use strict";

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById("navToggle");
  var navList = document.getElementById("navList");
  if (navToggle && navList) {
    navToggle.addEventListener("click", function () {
      var isOpen = navList.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navList.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navList.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Dark mode toggle (persisted) ---------- */
  var themeToggle = document.getElementById("themeToggle");
  var STORAGE_KEY = "portfolio-theme";

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      themeToggle && themeToggle.setAttribute("aria-pressed", "true");
      themeToggle && themeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
      document.documentElement.removeAttribute("data-theme");
      themeToggle && themeToggle.setAttribute("aria-pressed", "false");
      themeToggle && themeToggle.setAttribute("aria-label", "Switch to dark mode");
    }
  }

  var savedTheme = null;
  try { savedTheme = localStorage.getItem(STORAGE_KEY); } catch (e) { /* storage unavailable */ }

  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    applyTheme("dark");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var isDark = document.documentElement.getAttribute("data-theme") === "dark";
      var next = isDark ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* storage unavailable */ }
    });
  }

  /* ---------- Render certifications ---------- */
  var certList = document.getElementById("certList");
  if (certList && typeof certifications !== "undefined") {
    certifications.forEach(function (cert) {
      var li = document.createElement("li");
      li.innerHTML =
        '<div>' +
          '<span class="cert-item__title">' + cert.title + '</span>' +
          '<span class="cert-item__issuer">' + cert.issuer + '</span>' +
        '</div>' +
        '<span class="cert-item__date">' + cert.date + '</span>';
      certList.appendChild(li);
    });
  }

  /* ---------- Render projects ---------- */
  var projectGrid = document.getElementById("projectGrid");
  if (projectGrid && typeof projects !== "undefined") {
    projects.forEach(function (project) {
      var card = document.createElement("div");
      card.className = "project-card" + (project.placeholder ? " project-card--placeholder" : "");

      var html = '<span class="project-card__meta">' + project.category + '</span>';
      html += '<h3 class="project-card__title">' + project.title + '</h3>';
      html += '<p class="project-card__desc">' + project.description + '</p>';

      if (project.placeholder) {
        html += '<span class="project-card__status">Coming soon</span>';
      } else {
        if (project.tools) {
          html += '<p class="project-card__meta">' + project.tools + '</p>';
        }
        if (project.repo) {
          html += '<a class="project-card__link" href="' + project.repo + '" target="_blank" rel="noopener">View on GitHub</a>';
        }
        if (project.demo) {
          html += '<a class="project-card__link" href="' + project.demo + '" target="_blank" rel="noopener">Live demo</a>';
        }
      }

      card.innerHTML = html;
      projectGrid.appendChild(card);
    });
  }

  /* ---------- GitHub profile link ----------
     Update the href below once the GitHub profile repo/username is set. */
  var githubLink = document.getElementById("githubLink");
  if (githubLink) {
    // githubLink.href = "https://github.com/your-username";
  }
})();
