# Dalla Mamma — Site du restaurant

Ce dépôt contient le **site web d’un restaurant fictif** nommé **Dalla Mamma**.  
C’est un projet d’études : l’objectif est de créer un site moderne pour un restaurant.

---

## C’est quoi ce projet ?

Un **restaurant branché** a besoin d’un **site internet** pour se faire connaître.  
Ici, on a imaginé un restaurant italien et on a construit les pages du site comme demandé dans le sujet (Sujet 02 – Restaurant fictif).

Le site est fait avec des **fichiers HTML** (les pages), **CSS** (le design, les couleurs, la mise en page) et un peu de **JavaScript** (pour les interactions).

---

## Les pages du site

Le sujet demande **3 types de pages**. Voici ce qu’on a (ou ce qu’on prévoit) :

### 1. Accueil

- **Rôle :** C’est la **page d’entrée** quand on arrive sur le site.
- **Contenu :** L’ambiance du restaurant, une petite **accroche** pour donner envie de venir (texte, images, ton du lieu).
- **Fichier :** `index.html` (c’est la page “par défaut” d’un site).

### 2. Menu

- **Rôle :** Montrer **ce qu’on mange et boit** au restaurant.
- **Contenu :** Les plats sont présentés sous forme de **cartes** (image + nom + description + prix), avec des **catégories** (entrées, plats, desserts, etc.).
- **Fichier :** `Menu.html`

### 3. Réservation

- **Rôle :** Permettre au client de **réserver une table**.
- **Contenu :** Un **formulaire** (nom, prénom, date, nombre de personnes, message, etc.) qui doit être **vérifié avec du JavaScript** avant envoi (pour éviter les erreurs de saisie).
- **Fichier :** `contact.html`

---

## Les fonctionnalités demandées

Le sujet demande aussi **3 fonctionnalités** :

1. **Filtres sur le menu**  
   Sur la page Menu, pouvoir filtrer les plats par catégorie : **entrées**, **plats**, **desserts** (boutons ou onglets pour n’afficher qu’une catégorie à la fois).  
   → À faire côté **JavaScript** (ou déjà en place selon l’avancement).

2. **Validation du formulaire de réservation**  
   Avant d’envoyer le formulaire, le **JavaScript** vérifie que les champs sont corrects (email valide, date choisie, etc.) et affiche des messages d’erreur si besoin.  
   → À faire ou à compléter dans `scripts.js`.

3. **Compteur de places restantes**  
   Un **compteur** qui affiche le **nombre de places encore disponibles** (par jour ou pour un créneau).  
   → Idée : afficher un nombre mis à jour (même fictif pour l’instant) pour montrer la fonctionnalité.

---

## Structure du projet (pour repère)

- **index.html** — Page d’accueil
- **Menu.html** — Page du menu (cartes, catégories)
- **contact.html** — Page de réservation (formulaire)
- **menu-contact.css** — Styles communs (design des pages Menu et Contact, barre de navigation, pied de page)
- **style.css** — Styles de la page d’accueil
- **scripts.js** — Scripts communs (validation formulaire, filtres menu, compteur de places, etc.)
- **img/** — Dossier des images (plats, logo, etc.)

Le projet peut être fait **à deux** : une personne s’occupe surtout de l’accueil (index + style.css), l’autre des pages Menu et Contact (Menu.html, contact.html + menu-contact.css). Le JavaScript peut être partagé.

---

## Sujet de référence

- **Sujet 02 – Restaurant fictif**
- Un restaurant branché a besoin d’un site moderne pour attirer des clients.
- **Pages :** Accueil (ambiance, accroche), Menu (cartes avec catégories), Réservation (formulaire validé en JS).
- **Fonctionnalités :** Filtres sur le menu (entrées / plats / desserts), validation du formulaire de réservation, compteur de places restantes.

---

Si quelque chose n’est pas clair ou si tu veux qu’on détaille une partie (par exemple “comment on ouvre le site” ou “où est le formulaire”), dis-le et on peut adapter ce README.
