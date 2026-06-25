

document.querySelectorAll("aside nav a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("bg-orange-700/10", "text-orange-700", "font-semibold");
  }
});


(function () {
  var currentPath = window.location.pathname;

  document.querySelectorAll("#navbar a[href]").forEach(function (link) {
    var href = link.getAttribute("href") || "";

    if (
      href.startsWith("#") ||
      href.startsWith("javascript:") ||
      href.startsWith("mailto:")
    ) {
      return;
    }

    var linkUrl = new URL(href, window.location.origin);

    // Normalize (remove trailing slash)
    var linkPath = linkUrl.pathname.replace(/\/$/, "");
    var current = currentPath.replace(/\/$/, "");

    if (linkPath === current) {
      link.classList.add("text-orange-700");
    }
  });
})();