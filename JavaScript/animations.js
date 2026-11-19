/* animations.js : barre de progression, titres, apparition au scroll, halo des cartes */
(function () {
  var rm = matchMedia("(prefers-reduced-motion:reduce)").matches;

  /* barre de progression du scroll */
  var bar = document.createElement("div");
  bar.id = "prog";
  document.body.appendChild(bar);
  function prog() {
    var h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = "scaleX(" + (h > 0 ? Math.min(scrollY / h, 1) : 0) + ")";
  }
  addEventListener("scroll", prog, { passive: true });
  addEventListener("hashchange", function () { setTimeout(prog, 60); });
  prog();

  /* rang de chaque pill, pour les faire apparaître en cascade */
  document.querySelectorAll(".pills").forEach(function (p) {
    [].forEach.call(p.children, function (c, i) { c.style.setProperty("--k", i); });
  });

  /* titres : un mot après l'autre */
  document.querySelectorAll(".about h2,.ab-hero h2,.ctinfo h2").forEach(function (h) {
    var t = h.textContent.trim();
    h.textContent = "";
    t.split(" ").forEach(function (w, i) {
      var s = document.createElement("span"), u = document.createElement("span");
      s.className = "w";
      u.textContent = w;
      u.style.setProperty("--w", i);
      s.appendChild(u);
      h.appendChild(s);
      h.appendChild(document.createTextNode(" "));
    });
  });

  /* apparition au scroll (accueil et projets) */
  if (!rm && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    var n = 0;
    document.querySelectorAll(".bento>.card,.right>.card,.stack>.proj").forEach(function (el) {
      el.classList.add("rv");
      el.style.setProperty("--rd", (n++ % 3) * 0.1 + "s");
      io.observe(el);
    });
  }

  /* halo qui suit le curseur sur les cartes */
  document.addEventListener("pointermove", function (e) {
    var c = e.target.closest && e.target.closest(".card");
    if (!c) return;
    var r = c.getBoundingClientRect();
    c.style.setProperty("--mx", e.clientX - r.left + "px");
    c.style.setProperty("--my", e.clientY - r.top + "px");
  }, { passive: true });
})();

/* bannière des technologies synchronisée avec les compétences de l'accueil */
var skillPills = document.querySelectorAll(".right .pills .pill");
var mqs = [].slice.call(skillPills).map(function (skill) {
  return "<span>" + skill.textContent.trim() + "</span>";
}).join("");
document.getElementById("mqt").innerHTML = mqs + mqs;
