import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// React-Bootstrap imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function App() {
  const [likes, setLikes] = useState({ card1: 42, card2: 78, card3: 95 });

  const handleLike = (cardKey) => {
    setLikes((prev) => ({
      ...prev,
      [cardKey]: prev[cardKey] + 1
    }));
  };

  // 3 Cards data with rich content
  const cardData = [
    {
      id: 'card1',
      badge: 'Frontend',
      badgeBg: 'info',
      title: 'React & Modern UI',
      text: 'Concevez des interfaces utilisateur réactives, modernes et performantes en exploitant la puissance des composants, hooks et React-Bootstrap.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80',
      tag: 'React 18',
      author: 'Karma-22'
    },
    {
      id: 'card2',
      badge: 'Backend & Cloud',
      badgeBg: 'success',
      title: 'Node.js & API REST',
      text: 'Développez des backends scalables, robustes et sécurisés avec Express, MongoDB et connectez des API RESTful professionnelles.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
      tag: 'Node / Express',
      author: 'Darius Ange'
    },
    {
      id: 'card3',
      badge: 'Full Stack',
      badgeBg: 'primary',
      title: 'Architecture Cloud & DevOps',
      text: 'Maîtrisez le cycle de déploiement continu, la conteneurisation Docker et l’hébergement moderne sur le cloud pour vos applications web.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
      tag: 'Cloud & CI/CD',
      author: 'GoMyCode Bootcamp'
    }
  ];

  return (
    // Consigne: À l'intérieur du composant App, créer un React.Fragment
    <React.Fragment>
      {/* Consigne: À l'intérieur du fragment, créer un div avec la className App */}
      <div className="App">
        {/* 1. BARRE DE NAVIGATION (react-bootstrap Navbar) */}
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top" className="custom-navbar shadow-sm">
          <Container>
            <Navbar.Brand href="#home" className="fw-bold d-flex align-items-center gap-2">
              <span className="brand-logo">⚡</span>
              <span className="brand-text">GoMyCode • React App</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar-nav" />
            <Navbar.Collapse id="main-navbar-nav">
              <Nav className="me-auto ms-lg-4">
                <Nav.Link href="#home" className="active">Accueil</Nav.Link>
                <Nav.Link href="#features">Programmes</Nav.Link>
                <Nav.Link href="#pricing">À propos</Nav.Link>
                <NavDropdown title="Modules" id="nav-dropdown">
                  <NavDropdown.Item href="#es6">Module ES6</NavDropdown.Item>
                  <NavDropdown.Item href="#react">Module React JS</NavDropdown.Item>
                  <NavDropdown.Item href="#node">Module Node & Express</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#checkpoint">Checkpoint Validé</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav className="align-items-center gap-2">
                <Badge bg="primary" pill className="px-3 py-2">
                  Étudiant : Karma-22
                </Badge>
                <Button variant="outline-light" size="sm" href="https://github.com/Karma-22" target="_blank">
                  GitHub Profile
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* 2. EN-TÊTE / HERO SECTION (react-bootstrap Header) */}
        <header className="hero-section text-center text-white py-5">
          <Container>
            <Row className="justify-content-center">
              <Col md={10} lg={8}>
                <div className="badge-pill mb-3">
                  <span>🚀 CHECKPOINT REACT JS VALIDÉ</span>
                </div>
                <h1 className="display-4 fw-extrabold mb-3 text-gradient">
                  Premier Contact avec React & React-Bootstrap
                </h1>
                <p className="lead text-light-50 mb-4">
                  Application créée dans le cadre du Bootcamp <strong>GoMyCode</strong> démontrant l'utilisation
                  des fragments React, de la Navbar responsive, du Header stylisé et des Cards dynamiques.
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Button variant="primary" size="lg" className="px-4 shadow-sm" href="#cards-section">
                    Explorer les 3 Cartes ↓
                  </Button>
                  <Button variant="outline-light" size="lg" className="px-4" href="https://student.learn.gomycode.co" target="_blank">
                    Espace GoMyCode
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </header>

        {/* 3. SECTION DES 3 CARTES (react-bootstrap Cards) */}
        <main id="cards-section" className="py-5">
          <Container>
            <div className="section-title text-center mb-5">
              <span className="text-primary text-uppercase fw-bold letter-spacing">Découvrez nos modules</span>
              <h2 className="fw-bold mt-2">Les 3 Composants Cartes</h2>
              <p className="text-muted">Chaque carte est générée avec React-Bootstrap et inclut des interactions en temps réel.</p>
            </div>

            <Row className="g-4">
              {cardData.map((card) => (
                <Col key={card.id} xs={12} md={6} lg={4}>
                  <Card className="h-100 shadow-sm custom-card border-0">
                    <div className="card-img-wrapper">
                      <Card.Img
                        variant="top"
                        src={card.image}
                        alt={card.title}
                        className="custom-card-img"
                      />
                      <Badge bg={card.badgeBg} className="card-badge">
                        {card.badge}
                      </Badge>
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <small className="text-muted fw-semibold">{card.tag}</small>
                        <small className="text-primary fw-bold">Par {card.author}</small>
                      </div>
                      <Card.Title className="fw-bold fs-5 mb-3">{card.title}</Card.Title>
                      <Card.Text className="text-secondary flex-grow-1">
                        {card.text}
                      </Card.Text>
                      <div className="card-footer-action pt-3 mt-auto d-flex justify-content-between align-items-center border-top">
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() => handleLike(card.id)}
                          className="d-flex align-items-center gap-1"
                        >
                          ❤️ <span>{likes[card.id]}</span>
                        </Button>
                        <Button variant="primary" size="sm">
                          En savoir plus →
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </main>

        {/* 4. FOOTER */}
        <footer className="footer bg-dark text-white text-center py-4 mt-auto">
          <Container>
            <p className="mb-1 text-light-70">
              © 2026 GoMyCode Bootcamp • Checkpoint REACT JS • Développé par <strong>Darius Ange (Karma-22)</strong>
            </p>
            <small className="text-muted">
              Construit avec React 18, React-Bootstrap 2.10 et Vite.
            </small>
          </Container>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default App;
