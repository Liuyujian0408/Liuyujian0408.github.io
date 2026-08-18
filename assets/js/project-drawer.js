(function () {
  var overlay = document.getElementById("project-drawer-overlay");
  var drawer = document.getElementById("project-drawer");
  var body = document.getElementById("project-drawer-body");
  var backBtn = document.getElementById("project-drawer-back");
  var edgeBtn = document.getElementById("project-drawer-edge");
  if (!overlay || !drawer || !body) return;

  var cache = {};

  function openDrawer() {
    overlay.hidden = false;
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("project-drawer-open");
  }

  function closeDrawer() {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    overlay.hidden = true;
    document.documentElement.classList.remove("project-drawer-open");
  }

  function rewriteImagePaths(root) {
    root.querySelectorAll("img").forEach(function (img) {
      var src = img.getAttribute("src") || "";
      if (src.indexOf("../images/") === 0) {
        img.setAttribute("src", src.replace("../images/", "images/"));
      }
    });
  }

  function extractContent(html, url) {
    var doc = new DOMParser().parseFromString(html, "text/html");
    var source =
      doc.querySelector(".project-detail__content") ||
      doc.querySelector(".wrap") ||
      doc.querySelector("article") ||
      doc.body;
    if (!source) return "<p>Failed to load details.</p>";

    var clone = source.cloneNode(true);
    clone.querySelectorAll("a.back, .back").forEach(function (el) {
      el.remove();
    });
    rewriteImagePaths(clone);
    return clone.innerHTML;
  }

  function loadDetail(url) {
    body.innerHTML = '<p class="project-drawer__loading">Loading...</p>';
    openDrawer();

    if (cache[url]) {
      body.innerHTML = cache[url];
      return;
    }

    fetch(url, { credentials: "same-origin" })
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.text();
      })
      .then(function (html) {
        var content = extractContent(html, url);
        cache[url] = content;
        body.innerHTML = content;
      })
      .catch(function () {
        body.innerHTML =
          '<p>Could not load details. <a href="' +
          url +
          '">Open full page</a>.</p>';
      });
  }

  document.addEventListener("click", function (e) {
    var link = e.target.closest("a.js-project-detail");
    if (!link) return;
    e.preventDefault();
    var url = link.getAttribute("data-detail-url") || link.getAttribute("href");
    if (url) loadDetail(url);
  });

  overlay.addEventListener("click", closeDrawer);
  if (backBtn) backBtn.addEventListener("click", closeDrawer);
  if (edgeBtn) edgeBtn.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) {
      closeDrawer();
    }
  });
})();
