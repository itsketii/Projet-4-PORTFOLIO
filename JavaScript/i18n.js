/* i18n.js : traductions et bouton FR/EN */
var EN = {
    n1: "Home",
    n2: "About",
    n3: "Projects",
    n4: "Resume",
    about:
      "Second-year Computer Science and Software Engineering student at IIT (Institut Ivoirien de Technologie), Grand-Bassam. I am learning programming and software development. I enjoy bringing projects that solve everyday problems to life while giving free rein to my imagination. I am also learning databases with the goal of becoming a data engineer.",
    aboutp:
      "Second-year Computer Science and Software Engineering student at IIT Grand-Bassam. I build mobile apps with Flutter and websites with Python and JavaScript. I like turning a real need into a clear interface, and I am learning databases to aim for a data engineering career.",
    mp: "My projects",
    t0: "Good to know",
    h0: "Mostly academic projects",
    p0: "Most of my projects come from my classes at IIT. Each one taught me something concrete. Swipe to explore them.",
    p1: "A Python console application that extracts, cleans and analyzes Amazon product data.",
    p2: "A Windows Forms application for managing university students, registrations, schedules and statistics.",
    p3: "A personal library for managing books, films, series, games, music and manga.",
    p5: "Fork of an Excel MSISDN transformation portal, analyzed and containerized with Docker.",
    sk: "Skills",
    cv: "Resume",
    cvt: "My background in detail",
    open: "Open",
    ph: "A few recent projects, from mobile to web.",
    more: "See more",
    pd1: "An MVC application that extracts, deduplicates and exports product data, then analyzes prices.",
    pd2: "A three-tier Windows Forms application for university administrative and academic management.",
    pd3: "A personal web application with a REST API for tracking content, status, genres and progress.",
    pd5: "A Next.js / Node.js project that transforms Excel files into formatted TXT files. Docker Compose containerization was studied and implemented.",
    view: "View project",
    gh: "View on GitHub",
    docker: "View on Docker Hub",
    close: "Close",
    more2: "Learn more",
    c1: "1st at the Business Game",
    c2: "2nd at the Code Day hackathon",
    c3: "English C2",
    a1: "My journey",
    a2: "After earning my high school diploma in 2025 (series D), I joined IIT with the desire to turn my curiosity about technology into practical skills. My first year allowed me to strengthen my programming foundations, take part in hackathons and complete a discovery internship at Groupement Orange Service (GOS). These experiences taught me to work methodically and gave me a better understanding of professional expectations. Now in my second year of Computer Science and Software Engineering, I am continuing this progress with the same discipline. My goal is to move into data, more specifically data engineering. I believe data is at the heart of computing's evolution and the foundation on which artificial intelligence can develop.",
    m1: "Mobile",
    m1p: "I design mobile applications with Flutter and Dart, aiming to create simple, useful interfaces adapted to everyday needs. Each project helps me improve my interface design and application logic skills.",
    m2: "Web",
    m2p: "I build websites and web interfaces with HTML, CSS and JavaScript, focusing on structure, responsive design and user experience. I am strengthening my frontend skills while progressively learning backend development.",
    m3: "Data",
    m3p: "I work with SQL and database modeling, designing consistent structures and learning how to use data efficiently. I also build Windows Forms interfaces. Alongside this, I am beginning to explore data engineering, especially pipeline design and the different stages of data processing.",
    eng: "Involvement",
    engp: "I contribute to student life as an advisor to the English club and treasurer of the IIT IT club.",
    hs: "Off screen",
    hsp: "Outside of computing, I recharge through music, video games, cycling and basketball.",
    seek: "Open to conversations and projects in web, mobile and data development.",
    mail: "Write to me",
    dl: "Download PDF",
    cs: "Skills",
    cl: "Languages",
    clp: "French, English (C2)",
    ch: "Hobbies",
    cf: "Education",
    cx: "Experience",
    cp: "Projects",
    cd: "Awards",
    fperiod: "2025 - Present",
    f1: "Institut Ivoirien de Technologie (IIT) - 2nd year",
    bacperiod: "2025",
    f2: "Series D",
    xperiod: "August - September 2026",
    x1: "Discovery internship as an application support and DBA assistant: learning application containerization with Docker, virtual machines, SQL script optimization, and training in Docker, Kubernetes and professional conduct.",
    p4: "A Flutter app simulating electricity tracking, with mobile money screens.",
    d1: "1st place, IIT Business Game.",
    d2: "2nd place, IIT Code Day hackathon.",
    k1: "Tell me about your project",
    k2: "Have an app or website idea? Tell me what you have in mind. I reply within a few days, with questions or a first proposal.",
    k3: "Email me at:",
    k4: "Follow me at:",
    k5: "Your name",
    k6: "Your email",
    k7: "Project type",
    k8: "Mobile app",
    k9: "Website",
    k10: "Database",
    k11: "Other",
    k12: "Timeline",
    k13: "Under a month",
    k14: "1 to 3 months",
    k15: "Flexible",
    k16: "Project details, context or how I can help",
    k17: "Send",
    ft: "From mobile to web, from idea to interface.",
    fav: "Available for internships",
    student: "Student",
    contact: "Contact",
    bac: "High school diploma",
  },
  T = [].slice.call(document.querySelectorAll("[data-t]")),
  L = document.getElementById("lang");
T.forEach(function (e) {
  e.dataset.fr = e.textContent;
});
L.addEventListener("click", function () {
  var en = document.documentElement.lang !== "en";
  document.documentElement.lang = en ? "en" : "fr";
  T.forEach(function (e) {
    e.textContent = en ? EN[e.dataset.t] : e.dataset.fr;
  });
  document.querySelectorAll("[data-lang]").forEach(function (e) {
    e.hidden = e.dataset.lang !== (en ? "en" : "fr");
  });
  L.textContent = en ? "FR" : "EN";
});
document.querySelectorAll("[data-ph]").forEach(function (e) {
  e.dataset.phf = e.placeholder;
});
L.addEventListener("click", function () {
  var en = document.documentElement.lang === "en";
  document.querySelectorAll("[data-ph]").forEach(function (e) {
    e.placeholder = en ? EN[e.dataset.ph] : e.dataset.phf;
  });
});
