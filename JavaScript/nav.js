/* nav.js : navigation entre les pages, thème clair/sombre, menu mobile */
/* liens branchés depuis js/config.js */
(function () {
  var S = window.SITE || {};
  document.querySelectorAll("[data-link]").forEach(function (el) {
    var v = S[el.dataset.link];
    if (v) {
      el.href = v;
      el.target = "_blank";
      el.rel = "noopener";
    } else {
      el.style.display = "none";
    }
  });
})();
var nav = document.getElementById("nav"),
  last = window.scrollY;
window.addEventListener(
  "scroll",
  function () {
    var y = window.scrollY;
    nav.classList.toggle("hide", y > last && y > 120);
    last = y;
  },
  { passive: true },
);
document.getElementById("theme").addEventListener("click", function () {
  var r = document.documentElement,
    dark = r.dataset.theme
      ? r.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme:dark)").matches;
  r.dataset.theme = dark ? "light" : "dark";
});
var V = ["projects", "about", "cv", "contact"];
function route() {
  var h = location.hash.slice(1),
    p = V.indexOf(h) > -1;
  nav.classList.remove("open");
  document.getElementById("home").hidden = p;
  V.forEach(function (v) {
    document.getElementById(v).hidden = v !== h;
  });
  document.querySelectorAll(".links a").forEach(function (a) {
    a.classList.toggle("cur", a.hash === "#" + (p ? h : "home"));
  });
  var t = !p && h && document.getElementById(h);
  if (t) t.scrollIntoView();
  else window.scrollTo(0, 0);
}
document.getElementById("burger").addEventListener("click", function () {
  nav.classList.toggle("open");
});
var fo = document.querySelector(".fbot"),
  ic = document.querySelector(".icons").cloneNode(true);
ic.querySelectorAll("button").forEach(function (b) {
  b.remove();
});
fo.appendChild(ic);
(function () {
  var nv = document.getElementById("nav"),
    bd = document.body,
    bg = document.getElementById("burger"),
    sc = document.createElement("div");
  sc.id = "scrim";
  bd.appendChild(sc);
  function sync() {
    var o = nv.classList.contains("open");
    bd.classList.toggle("menu", o);
    bg.setAttribute("aria-expanded", o);
  }
  function shut() {
    nv.classList.remove("open");
    sync();
  }
  document.querySelectorAll(".links a").forEach(function (a, i) {
    a.style.setProperty("--n", i);
    a.addEventListener("click", shut);
  });
  bg.addEventListener("click", sync);
  sc.addEventListener("click", shut);
  addEventListener("keydown", function (e) {
    if (e.key === "Escape") shut();
  });
  addEventListener("hashchange", shut);
  addEventListener("resize", function () {
    if (innerWidth > 800) shut();
  });
  addEventListener(
    "scroll",
    function () {
      if (nv.classList.contains("open")) shut();
    },
    { passive: true },
  );
})();
addEventListener("hashchange", route);
route();
