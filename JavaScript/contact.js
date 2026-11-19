/* contact.js : icônes de la page Contact et formulaire (ouvre l'application mail) */
var so = document.querySelector(".soc");
document.querySelectorAll("nav .icons a").forEach(function (a) {
  so.appendChild(a.cloneNode(true));
});
document.getElementById("cf").addEventListener("submit", function (e) {
  e.preventDefault();
  var f = e.target,
    g = function (n) {
      return f.elements[n].value;
    },
    a = document.createElement("a");
  a.href =
    "mailto:ketsia.kouadio@iit.ci?subject=" +
    encodeURIComponent(g("t") + " | " + g("n")) +
    "&body=" +
    encodeURIComponent(
      g("m") + "\n\n" + g("n") + " (" + g("e") + ")\n" + g("d"),
    );
  a.click();
});
