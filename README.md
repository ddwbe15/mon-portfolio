# Portfolio – Douho William (BTS SIO SLAM)

## Arborescence
```
portfolio/
├── index.html          → structure de la page (sections, navbar)
├── css/style.css       → tout le design (couleurs dans :root)
├── js/
│   ├── main.js         → animations, menu mobile, envoi du formulaire
│   └── config.js       → réglages du formulaire (clés EmailJS)
└── assets/
    ├── img/            → tes images / captures de projets
    └── docs/           → cv.pdf, rapports, synthèses de veille
```

## Que modifier ?
| Je veux…                     | Fichier                              |
|------------------------------|--------------------------------------|
| Changer textes / projets     | index.html (commentaires ✏️)         |
| Ajouter un onglet            | index.html (navbar + nouvelle section) |
| Changer couleurs / police (violet : --accent) | css/style.css (section 1, :root) |
| Changer les phrases d'accueil| js/main.js (tableau ROLES)           |
| Régler le formulaire / token | js/config.js                        |

## Formulaire de contact (EmailJS)
Aucun serveur PHP n'est nécessaire : le site est 100 % statique (GitHub Pages, Netlify, ouverture directe…).
Suis les étapes en haut de `js/config.js` : service Gmail, modèle de mail, clé publique.
Ton adresse de réception est enregistrée dans le modèle EmailJS : elle n'apparaît pas dans le code du site.

## Mise en ligne sur GitHub Pages
1. Crée un dépôt public `tonpseudo.github.io` (ou un autre nom) et envoie-y le contenu du dossier `portfolio`.
2. Settings > Pages > Source : branche `main`, dossier `/ (root)`.
3. Le site est disponible à `https://tonpseudo.github.io`.
