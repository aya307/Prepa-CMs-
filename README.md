# 🎨 Art Gallery - MERN Stack Project

## 📌 Description
Art Gallery est une application web développée avec la **stack MERN (MongoDB, Express, React, Node.js)** qui permet de présenter une collection d'œuvres d'art comme des **dessins, peintures et photographies** dans une **galerie responsive et moderne**.

Les visiteurs peuvent parcourir les œuvres dans une **grille responsive**, afficher les images en **plein écran**, et filtrer les œuvres par catégorie.  
L’administrateur peut **ajouter, modifier ou supprimer des œuvres** via un système de gestion.

---

# 🚀 Technologies utilisées

## Frontend
- React.js
- HTML5
- CSS3
- JavaScript (ES6+)
- Axios

## Backend
- Node.js
- Express.js

## Base de données
- MongoDB
- Mongoose

## Autres outils
- Git
- GitHub
- npm
- Postman

---

# 🏗 Architecture du projet

```
art-gallery/
│
├── backend/
│   ├── models/
│   │   └── Artwork.js
│   ├── routes/
│   │   └── artworks.js
│   ├── controllers/
│   │   └── artworkController.js
│   ├── config/
│   │   └── db.js
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Gallery.js
│   │   │   ├── ImageCard.js
│   │   │   ├── Navbar.js
│   │   │   └── Modal.js
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── About.js
│   │   │   └── Contact.js
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.js
│   │   └── index.js
│
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Cloner le projet

```bash
git clone https://github.com/ton-username/art-gallery.git
cd art-gallery
```

---

# 📦 Installation Backend

Aller dans le dossier backend :

```bash
cd backend
```

Installer les dépendances :
1
```bash
npm install
```

Lancer le serveur :

```bash
npm start
```

Le backend fonctionne sur :

```
http://localhost:5000
```

---

# 💻 Installation Frontend

Aller dans le dossier frontend :

```bash
cd frontend
```

Installer les dépendances :

```bash
npm install
```

Lancer React :

```bash
npm start
```

Le site sera disponible sur :

```
http://localhost:3000
```

---

# 🗄 Configuration MongoDB

Créer un fichier `.env` dans le dossier backend :

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/art_gallery
```

Ou utiliser MongoDB Atlas :

```
MONGO_URI=your_mongodb_connection_string
```

---

# 📚 API Endpoints

## Récupérer toutes les œuvres

```
GET /api/artworks
```

## Ajouter une œuvre

```
POST /api/artworks
```

Exemple de body :

```json
{
"title": "Sunset Painting",
"description": "A beautiful sunset artwork",
"category": "Painting",
"imageUrl": "image.jpg"
}
```

---

## Modifier une œuvre

```
PUT /api/artworks/:id
```

---

## Supprimer une œuvre

```
DELETE /api/artworks/:id
```

---

# 🧑‍💻 Fonctionnalités

## Visiteur
- Voir la galerie d’images
- Affichage en grille responsive
- Cliquer pour voir une image en plein écran
- Filtrer les œuvres par catégorie
- Voir la page À propos
- Contacter l’artiste

## Administrateur
- Ajouter des œuvres
- Modifier des œuvres
- Supprimer des œuvres
- Gérer les catégories

---

# 📋 User Stories

### US1 - Voir la galerie
En tant que visiteur, je veux voir toutes les œuvres dans une grille afin de parcourir facilement la galerie.

### US2 - Voir une image en plein écran
En tant que visiteur, je veux cliquer sur une image pour la voir en grand.

### US3 - Filtrer par catégorie
En tant que visiteur, je veux filtrer les œuvres par type (photo, dessin, peinture).

### US4 - Ajouter une œuvre
En tant qu’administrateur, je veux ajouter une nouvelle œuvre à la galerie.

### US5 - Modifier une œuvre
En tant qu’administrateur, je veux modifier les informations d’une œuvre.

### US6 - Supprimer une œuvre
En tant qu’administrateur, je veux supprimer une œuvre.

---

# ✅ Critères d’acceptation

- La galerie est responsive
- Les images peuvent être affichées en plein écran
- Les données sont stockées dans MongoDB
- Les images peuvent être ajoutées et supprimées
- Les API fonctionnent correctement

---

# 📱 Responsive Design

Le site est optimisé pour :

- Desktop
- Tablette
- Mobile

---

# 🔒 Sécurité

- Validation des données
- Vérification du format des images
- Limitation de la taille des fichiers

---

# 📈 Améliorations futures

- Authentification administrateur (JWT)
- Likes sur les œuvres
- Commentaires
- Pagination
- Recherche d’œuvres
- Mode sombre

---

# 👩‍💻 Auteur

Aya Znatni

---

# 📄 Licence

MIT License