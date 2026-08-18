(function () {
  var overlay = document.getElementById("project-drawer-overlay");
  var drawer = document.getElementById("project-drawer");
  var body = document.getElementById("project-drawer-body");
  var backBtn = document.getElementById("project-drawer-back");
  var edgeBtn = document.getElementById("project-drawer-edge");
  if (!overlay || !drawer || !body) return;

  var cache = {};
  var loadingHtml = '<p class="project-drawer__loading">Loading...</p>';

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
        img.setAttribute("src", src.replace("../images/", "/images/"));
      }
    });
  }

  function extractContent(html) {
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
    body.innerHTML = loadingHtml;
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
        var content = extractContent(html);
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

  function findDetailLink(target) {
    var el = target;
    if (!el) return null;
    if (el.nodeType !== 1) el = el.parentElement;
    if (!el || typeof el.closest !== "function") return null;
    return el.closest("a.js-project-detail");
  }

  document.addEventListener("click", function (e) {
    var link = findDetailLink(e.target);
    if (!link) return;
    if (e.defaultPrevented) return;
    if (e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    e.preventDefault();
    e.stopPropagation();
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

  function stripInjectedLinkIcons() {
    document.querySelectorAll(".paper-box-text a").forEach(function (a) {
      a.querySelectorAll("img, svg").forEach(function (el) {
        el.remove();
      });

      var node = a.nextSibling;
      while (node) {
        var next = node.nextSibling;
        if (node.nodeType === 3) {
          if (!String(node.textContent || "").trim()) {
            node = next;
            continue;
          }
          break;
        }
        if (node.nodeType !== 1) break;

        var tag = node.tagName.toLowerCase();
        var onlyIcon =
          tag === "img" ||
          tag === "svg" ||
          ((tag === "span" || tag === "div" || tag === "a") &&
            node.querySelector("img, svg") &&
            !String(node.textContent || "").trim());

        if (!onlyIcon) break;
        node.parentNode.removeChild(node);
        node = next;
      }
    });
  }

  stripInjectedLinkIcons();
  setTimeout(stripInjectedLinkIcons, 500);
  setTimeout(stripInjectedLinkIcons, 1500);
  if (typeof MutationObserver !== "undefined") {
    var mo = new MutationObserver(function () {
      stripInjectedLinkIcons();
    });
    mo.observe(document.body, { childList: true, subtree: true });
    setTimeout(function () {
      mo.disconnect();
    }, 4000);
  }
})();
