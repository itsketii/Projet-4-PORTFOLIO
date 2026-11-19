/* projects.js : swipe de « Mes projets » et fenêtre de détail */
function repoOf(b) {
  var k = b.closest(".proj").dataset.repo;
  return (SITE.repos && SITE.repos[k]) || SITE.github;
}
var dk = [].slice.call(document.querySelectorAll(".dc")),
  di = 0,
  busy = false,
  sx = null,
  mini = document.querySelector(".mini");
function nx() {
  if (busy) return;
  busy = true;
  var c = dk[di];
  c.classList.add("out");
  di = (di + 1) % dk.length;
  dk[di].classList.add("on");
  setTimeout(function () {
    c.classList.remove("on", "out");
    busy = false;
  }, 360);
}
mini.addEventListener("click", function (e) {
  if (e.target.closest(".swipe")) nx();
});
mini.addEventListener("pointerdown", function (e) {
  sx = e.clientX;
});
mini.addEventListener("pointerup", function (e) {
  if (sx !== null && Math.abs(e.clientX - sx) > 45) nx();
  sx = null;
});
var M = document.getElementById("modal"),
  MB = document.getElementById("mbody");
document.addEventListener("click", function (e) {
  var b = e.target.closest("[data-open]");
  if (b) {
    var a = b.closest(".proj").cloneNode(true);
    a.querySelector("[data-open]").remove();
    MB.textContent = "";
    MB.appendChild(a);
    document.getElementById("mgh").href = repoOf(b);
    M.showModal();
    M.scrollTop = 0;
    MB.scrollTop = 0;
    var dockerLink = document.getElementById("mdocker");
    var isDockerProject = b.closest(".proj").dataset.repo === "ombulk";
    dockerLink.hidden = !isDockerProject;
    dockerLink.style.display = isDockerProject ? "" : "none";
    dockerLink.href = SITE.dockerhub || "#";
    requestAnimationFrame(function () {
      M.scrollTop = 0;
      MB.scrollTop = 0;
    });
  } else if (e.target === M || e.target.closest("#mclose")) M.close();
});
