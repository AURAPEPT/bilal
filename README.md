# IZAMPEPTIDE — boutique et affiches (projet de formation commerciale)

Maquette **fictive** d'une boutique européenne de peptides thérapeutiques, imaginée dans un scénario où ces produits seraient autorisés à l'avenir.

## Ouvrir le site
Ouvrir `index.html` dans un navigateur. Aucun serveur n'est nécessaire.

## Pages
- `index.html` : accueil, promesse de la marque, produits phares
- `catalogue.html` : catalogue avec filtres par catégorie
- `produit.html?id=...` : fiche produit
- `panier.html` : panier avec étape « dépôt d'ordonnance » qui bloque la commande
- `legal.html` : cadre légal réel (UE et France) avec sources

## Important
Produits, prix et effets sont inventés. Aujourd'hui en France, un médicament sur ordonnance ne peut pas être vendu en ligne. Le parcours ordonnance du site est donc un scénario prospectif (voir `legal.html`).

## Affiches animées (`affiches/`)
- `affiches/index.html` : les 10 affiches animées (format 1080×1350, Instagram portrait). `?n=1` à `?n=10` en affiche une seule en taille réelle.
- `affiches/export/affiche-N.png` : version fixe, pour l'impression ou un diaporama.
- `affiches/export/affiche-N.mp4` : version vidéo animée de 7 s, pour les réseaux sociaux ou l'oral.

- `affiches/hygiene.html` : affiche hygiène de vie format téléphone (repères Manger Bouger). Export `hygiene.png` et `hygiene.mp4`.
- `affiches/pub-reel.html` : pub format Reel téléphone (1080×1920) sans prix : qualité, livraison, suivi. Export `pub-reel.png` et `pub-reel.mp4`.
- `affiches/canva/` : la pub Reel prête pour Canva (PDF avec texte modifiable + calques PNG : fond, fiole détourée, stickers, bouton, badge).
- `affiches/etiquette.html` : affiche format téléphone sur l'étiquetage de la fiole IZAMPEPTIDE, exportée en `etiquette.png` et `etiquette.mp4`.
- `affiches/reel.html` : vidéo Reel verticale (1080×1920, 29 s), exportée en `affiches/export/reel.mp4` (+ `reel-cover.png`).
- `affiches/story.html` : story verticale façon Snap (1080×1920), exportée en `affiches/export/story.png` et `story.mp4` (10 s).

1. Lancement de la marque · 2. IZAM Derma 89 € · 3. IZAM Meta 149 €/mois · 4. IZAM Articula 119 € · 5. IZAM Care (kit 24 €, téléconseil gratuit) · 6. Offre de lancement −15 % · 7. Livraison et garanties · 8. Comment commander · 9. Analyse juridique : marché gris vs IZAMPEPTIDE · 10. La marque : qualité, livraison, suivi (sans prix)

## Étiquetage (`etiquetage/`)
- `IZAMPEPTIDE-maquette-etiquette.docx` : maquette d'étiquette modifiable sous Word, avec la légende des mentions et les sources.
- `IZAMPEPTIDE-maquette-etiquette.pdf` : la même maquette en PDF.

## Invitation fiançailles Shayma & Bilal (`fiancailles/`)
Site d'invitation cinématique, thème marocain, autour de la lune (« Qamary »).

**Le parcours** : une vraie lune en 3D (cartes NASA) dans une arche marocaine → on appuie → plongée jusqu'au cratère Copernic (relief réel) → lever de Terre, verset 78:8 → deux lumières (Shayma et Bilal) tournent au-dessus du cratère et fusionnent en leurs prénoms → au scroll : versets, hadiths sur le mariage, rendez-vous, douâ, et la lune passe de pleine lune à croissant.

**À personnaliser** (sans rien recompiler) : `fiancailles/config.js`
- `date`, `lieu`, `adresse`, `whatsapp` : tant qu'un champ est vide, le site affiche « à venir » et cache le bouton lié.
- `musique` : dépose ton fichier audio dans `fiancailles/assets/musique.mp3` (ou change le chemin). S'il n'existe pas, le bouton son est masqué. Le son démarre en fondu quand on appuie sur la lune.

**Modifier le code** : les sources sont dans `fiancailles/src/` (Three.js, GSAP, Lenis). Après modification : `cd fiancailles && npm install && npm run build` (génère `dist/main.js`).

**Sources des textes et images**
- Versets : texte arabe et traduction Muhammad Hamidullah via quran.com (78:8, 30:21, 2:187 extrait, 25:74).
- Hadiths : texte arabe et jugements d'authenticité via la base hadith-api (fawazahmed0) : Ibn Mâjah 1847, Muslim 1467, Tirmidhî 3895 et 1162, Abû Dâwûd 2130. Les traductions marquées « trad. libre » sont rédigées pour l'invitation.
- Lune : NASA SVS « CGI Moon Kit » (SVS 4720, couleurs LRO/LROC, relief LRO/LOLA). Terre : NASA SVS « Blue Marble » (SVS 2915).
