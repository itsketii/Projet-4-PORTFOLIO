# **Projet-4-PORTFOLIO**

Portfolio personnel de **KOUADIO KETSIA**, réalisé dans le cadre du module
de programmation web.

---

> Portfolio statique présentant mon parcours, mes compétences, mes projets,
> mon curriculum vitae et mes informations de contact.

---

Ce portfolio a pour objectif de présenter mon profil de développeuse spécialisée
dans le développement mobile, web et les données. Il permet aux recruteurs,
aux enseignants et aux visiteurs de découvrir rapidement mon parcours, mes
réalisations et les technologies que j'utilise.

Le site est disponible en ligne à cette adresse :
**https://itsketii.github.io/Projet-4-PORTFOLIO/**

Il s'agit d'un projet pédagogique réalisé dans le cadre du cours de
Programmation Python. Aucune licence n'est définie pour le moment.

---

**STACK TECHNIQUE / OUTILS UTILISÉS**

- Langage : **HTML5**
- Mise en page : **CSS3**
- Interactions : **JavaScript**
- Hébergement : **GitHub Pages**
- Éditeur utilisé : **Visual Studio Code**
- Gestion du code : **Git** et **GitHub**
- Ressources :
  * fichiers SVG intégrés pour les icônes ;
  * Google Fonts ;
  * images locales au format PNG, ICO et WebP ;
  * PDF du curriculum vitae.

---

**FONCTIONNALITÉS DU PORTFOLIO**

- Navigation entre les sections Accueil, À propos, Projets, CV et Contact ;
- bento grid responsive pour présenter le profil et les compétences ;
- cartes de projets empilées avec fenêtre de détail ;
- liens vers GitHub, LinkedIn et l'adresse e-mail ;
- changement de thème clair et sombre ;
- traduction française / anglaise ;
- menu adapté aux écrans mobiles ;
- téléchargement du CV au format PDF ;
- formulaire de contact ouvrant l'application de messagerie ;
- animations et transitions CSS / JavaScript.

---

**ARCHITECTURE DU PROJET**

```
/Projet-4-PORTFOLIO
│
├── index.html                   # structure complète du portfolio
├── README.md                    # présentation du projet
├── .nojekyll                    # fichier de déploiement GitHub Pages
│
├── CSS/
│   ├── styles.css               # thème, mise en page et composants
│   ├── animations.css           # animations et effets visuels
│   └── menu.css                 # styles du menu responsive
│
├── JavaScript/
│   ├── config.js                # liens personnels et liens des projets
│   ├── i18n.js                  # traductions français / anglais
│   ├── nav.js                   # navigation, thème et menu mobile
│   ├── projects.js              # cartes et fenêtre de détail des projets
│   ├── contact.js               # formulaire de contact
│   └── animations.js            # animations du portfolio
│
├── Images/
│   ├── favicon.ico              # favicon au format ICO
│   ├── favicon.png              # favicon au format PNG
│   └── Projet/
│       └── github-profil.webp   # aperçu du profil GitHub
│
└── Docs/
    ├── CV.pdf                   # curriculum vitae téléchargeable
    ├── pp.jpg                   # photo de profil
    └── Template portfolio.mp4   # démonstration / référence du portfolio
```

---

**INSTALLATION & UTILISATION**

### 1. Récupérer le projet

```powershell
git clone https://github.com/itsketii/Projet-4-PORTFOLIO.git
cd Projet-4-PORTFOLIO
```

### 2. Ouvrir le portfolio

Ouvrir directement le fichier `index.html` dans un navigateur, ou utiliser
l'extension Live Server de Visual Studio Code.

```powershell
python -m http.server 4173
```

Puis ouvrir :

```text
http://localhost:4173
```

---

**CONFIGURATION DES LIENS**

Les liens personnels et les liens GitHub des projets sont centralisés dans
`JavaScript/config.js`.

```javascript
window.SITE = {
  github: "https://github.com/itsketii",
  linkedin: "LIEN_LINKEDIN",
  repos: {
    webscraping: "LIEN_GITHUB_WEB_SCRAPING",
    gestionuniversitaire: "LIEN_GITHUB_GESTION_UNIVERSITAIRE",
    minibiblio: "https://github.com/itsketii/mini-bibliotheque",
    ombulk: "https://github.com/itsketii/om_bulk_deletion"
  }
};
```

Remplacer les valeurs encore vides par les liens personnels ou les dépôts
correspondants.

---

**DIFFICULTÉS RENCONTRÉES**

- maintenir une mise en page cohérente entre ordinateur, tablette et mobile ;
- gérer plusieurs thèmes, langues et sections dans une seule page ;
- intégrer les animations sans dégrader la lisibilité ;
- organiser les styles et les scripts pour garder un projet facile à maintenir ;
- adapter les différentes sections aux tailles d'écran.

---

**AUTRICE**

**KOUADIO KETSIA**

Étudiante en 2e année d’Informatique & Génie Logiciel,
Institut Ivoirien de Technologie (IIT).

Projet réalisé dans le cadre du cours de Programmation Python.
