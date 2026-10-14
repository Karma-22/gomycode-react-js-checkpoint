# ⚛️ GoMyCode Bootcamp - Checkpoint REACT JS

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)]()
[![React-Bootstrap](https://img.shields.io/badge/React--Bootstrap-2.10.4-7952B3?logo=bootstrap&logoColor=white)]()
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)]()
[![Student](https://img.shields.io/badge/Student-Karma--22%20(Darius%20Ange)-blue.svg)]()

> Projet réalisé dans le cadre du **Bootcamp Full Stack Software Developer de GoMyCode**.  
> Ce checkpoint valide l'initialisation d'un projet React, le nettoyage de l'arborescence `src`, l'utilisation des Fragments React, et l'intégration complète de **React-Bootstrap** (Navbar responsive, En-tête Hero et 3 Cartes interactives).

---

## 📋 Table des Matières

- [Objectif du Checkpoint](#-objectif-du-checkpoint)
- [Instructions & Respect du Cahier des Charges](#-instructions--respect-du-cahier-des-charges)
- [Structure du Projet](#-structure-du-projet)
- [Composants Implémentés](#-composants-implémentés)
- [Installation & Démarrage](#-installation--démarrage)
- [Auteur](#-auteur)

---

## 🎯 Objectif du Checkpoint

Dans ce point de contrôle, l'étudiant doit créer une application React complète en utilisant **React-Bootstrap** pour structurer l'interface avec :
1. Une barre de navigation (`Navbar`).
2. Un en-tête moderne (`Header / Hero Section`).
3. Trois cartes d'information (`Cards`) avec images, titres, textes descriptifs et boutons d'action.

---

## ✅ Instructions & Respect du Cahier des Charges

| Exigence GoMyCode | Réalisation dans le projet | Statut |
| :--- | :--- | :---: |
| **Créer une application React** | Initialisée avec React 18, React-DOM et Vite pour une performance optimale | ✅ Validé |
| **Nettoyer le dossier `src`** | Fichiers nettoyés conformément aux consignes (`index.js`, `reportWebVitals.js`, `App.js`, styles) | ✅ Validé |
| **Utiliser `React.Fragment`** | Le composant `App` retourne un `<React.Fragment>` contenant l'arborescence | ✅ Validé |
| **Conteneur `div.App`** | Le fragment encapsule `<div className="App">` | ✅ Validé |
| **Barre de navigation React-Bootstrap** | `Navbar`, `Nav`, `Container`, `NavDropdown` avec menu rétractable mobile | ✅ Validé |
| **En-tête (Header) React-Bootstrap** | `header.hero-section` avec `Container`, `Row`, `Col`, boutons d'action | ✅ Validé |
| **3 Cartes (Cards) React-Bootstrap** | 3 composants `Card` avec `Card.Img`, `Card.Body`, `Card.Title`, `Card.Text`, `Button` et compteurs de likes | ✅ Validé |

---

## 📁 Structure du Projet

```text
02-react-js-checkpoint/
├── index.html                   # Fichier HTML principal avec polices Google Fonts
├── package.json                 # Dépendances (react, react-dom, react-bootstrap, bootstrap)
├── vite.config.js               # Configuration du bundler Vite
├── README.md                    # Documentation complète du checkpoint
├── .gitignore                   # Exclusion de node_modules et fichiers temporaires
└── src/
    ├── index.jsx / index.js     # Point d'entrée React 18 (createRoot)
    ├── reportWebVitals.js       # Mesure des métriques de performance Core Web Vitals
    ├── App.jsx / App.js         # Composant App avec Fragment, Navbar, Header, 3 Cards
    ├── App.css                  # Styles modernes, gradients et effets de cartes
    └── index.css                # Styles globaux et typographie Plus Jakarta Sans
```

---

## 🧩 Composants Implémentés

### 1. Barre de Navigation (`Navbar`)
- Marque GoMyCode avec logo et typographie dégradée.
- Liens de navigation responsives avec menu hamburger automatique sur mobile.
- Menu déroulant `NavDropdown` répertoriant les modules du Bootcamp.
- Badge d'identification de l'étudiant (**Karma-22**) et lien vers le profil GitHub.

### 2. En-tête (`Header`)
- Titre accrocheur avec gradient textuel moderne.
- Sous-titre expliquant la validation du checkpoint.
- Boutons d'action rapides pour défiler vers les cartes ou visiter la plateforme GoMyCode.

### 3. Les 3 Cartes (`Cards`)
- **Carte 1** : *React & Modern UI* (Composants, hooks, React-Bootstrap).
- **Carte 2** : *Node.js & API REST* (Backend scalable, Express, MongoDB).
- **Carte 3** : *Architecture Cloud & DevOps* (Déploiement continu, Docker, Cloud).
- Chaque carte comprend une image haute résolution, un badge thématique, un texte descriptif et un bouton interactif de like avec compteur d'état React.

---

## 🚀 Installation & Démarrage

### 1. Cloner le dépôt
```bash
git clone https://github.com/Karma-22/gomycode-react-js-checkpoint.git
cd gomycode-react-js-checkpoint
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Lancer l'application en mode développement
```bash
npm start
# ou :
npm run dev
```
L'application s'ouvrira sur `http://localhost:3000` (ou le port indiqué par Vite).

### 4. Compiler pour la production
```bash
npm run build
```

---

## 👨‍💻 Auteur

- **Étudiant** : Darius Ange (Karma-22)
- **GitHub** : [@Karma-22](https://github.com/Karma-22)
- **Formation** : Full Stack Software Developer - GoMyCode
