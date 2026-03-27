import "./App.css";

function App() {
  const artworks = [
    {
      id: 1,
      title: "Golden Sunset",
      category: "Peinture",
      image:
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      title: "Silent Sketch",
      category: "Dessin",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      title: "Urban Soul",
      category: "Photographie",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      title: "Color Dreams",
      category: "Peinture",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 5,
      title: "Ink Vision",
      category: "Dessin",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 6,
      title: "Light Moment",
      category: "Photographie",
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <div className="app">
      <header className="navbar">
        <div className="brand">
          <span className="brand-dot"></span>
          <h2>Art Gallery</h2>
        </div>

        <nav>
          <ul className="nav-links">
            <li><a href="#home">Accueil</a></li>
            <li><a href="#gallery">Galerie</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subtitle">Galerie d’art moderne</p>
          <h1>Exposez la beauté à travers chaque œuvre</h1>
          <p className="hero-text">
            Découvrez une collection élégante de peintures, dessins et
            photographies dans une expérience visuelle immersive et moderne.
          </p>

          <div className="hero-buttons">
            <a href="#gallery" className="btn btn-primary">Explorer la galerie</a>
            <a href="#about" className="btn btn-secondary">En savoir plus</a>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat-card">
          <h3>120+</h3>
          <p>Œuvres exposées</p>
        </div>
        <div className="stat-card">
          <h3>3</h3>
          <p>Catégories artistiques</p>
        </div>
        <div className="stat-card">
          <h3>100%</h3>
          <p>Design responsive</p>
        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="section-header">
          <span className="section-badge">Collection</span>
          <h2>Nos œuvres en vedette</h2>
          <p>
            Une sélection artistique présentée dans une grille élégante et
            moderne.
          </p>
        </div>

        <div className="filter-bar">
          <button className="filter-btn active">Tous</button>
          <button className="filter-btn">Peinture</button>
          <button className="filter-btn">Dessin</button>
          <button className="filter-btn">Photographie</button>
        </div>

        <div className="gallery-grid">
          {artworks.map((artwork) => (
            <div className="art-card" key={artwork.id}>
              <div className="art-image-wrapper">
                <img src={artwork.image} alt={artwork.title} className="art-image" />
                <span className="art-tag">{artwork.category}</span>
              </div>
              <div className="art-content">
                <h3>{artwork.title}</h3>
                <p>
                  Une œuvre artistique unique mettant en valeur l’émotion, la
                  lumière et la créativité.
                </p>
                <button className="card-btn">Voir plus</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-text">
          <span className="section-badge">À propos</span>
          <h2>Une galerie pensée pour l’art et l’élégance</h2>
          <p>
            Art Gallery est une application web développée pour exposer des
            œuvres dans une interface premium, intuitive et responsive.
            L’objectif est d’offrir une expérience moderne aussi bien pour les
            visiteurs que pour l’administrateur.
          </p>
          <ul className="about-list">
            <li>Présentation moderne des œuvres</li>
            <li>Navigation simple et agréable</li>
            <li>Design responsive pour tous les écrans</li>
            <li>Base idéale pour connecter le backend MERN</li>
          </ul>
        </div>

        <div className="about-box">
          <h3>Pourquoi ce projet ?</h3>
          <p>
            Mettre en avant des créations artistiques dans une vitrine digitale
            élégante, avec une base solide pour la gestion dynamique des données.
          </p>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-header">
          <span className="section-badge">Contact</span>
          <h2>Parlons de votre collection</h2>
          <p>
            Une demande, une collaboration ou un projet artistique à présenter ?
          </p>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Votre nom" />
            <input type="email" placeholder="Votre email" />
          </div>
          <input type="text" placeholder="Sujet" />
          <textarea rows="6" placeholder="Votre message"></textarea>
          <button type="submit" className="btn btn-primary">Envoyer</button>
        </form>
      </section>

      <footer className="footer">
        <div>
          <h3>Art Gallery</h3>
          <p>Une expérience artistique moderne en MERN Stack.</p>
        </div>
        <p className="footer-copy">© 2026 Aya Znatni - Tous droits réservés</p>
      </footer>
    </div>
  );
}

export default App;