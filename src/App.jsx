import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

import Catalogo from './Catalogo';
import Alcohol from './Alcohol';
import Login from './Login';
import AdminProfile from './AdminProfile';
import Refresco from './Refresco';
import AlcoholProfile from './AlcoholProfile';
import RefrescoProfile from './RefrescoProfile';
import FrutasProfile from './FrutasProfile';
import ExtrasProfile from './ExtrasProfile';
import Frutas from './Frutas';
import Extras from './Extras';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Menu />
        <main className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Catalogo" element={<Catalogo />} />
            <Route path="/Alcohol" element={<Alcohol />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/admin-profile" element={<AdminProfile />} />
            <Route path="/Refresco" element={<Refresco />} />
            <Route path="/alcohol-profile" element={<AlcoholProfile />} />
            <Route path="/refresco-profile" element={<RefrescoProfile />} />
            <Route path="/frutas-profile" element={<FrutasProfile />} />
            <Route path="/extras-profile" element={<ExtrasProfile />} />
            <Route path="/Frutas" element={<Frutas />} />
            <Route path="/Extras" element={<Extras />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 Innovation World</p>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <header>
        <h1>Bienvenido a BoozeBot</h1>
      </header>
      <div className="section-container">
        <section className="container custom-container">
          <div className="content">
            <img src="src/img/miche.png" alt="Catálogo de Productos" />
            <h2>Catálogo de Productos</h2>
            <p>Explora nuestra amplia selección de productos disponibles.</p>
            <Link to="/Catalogo" className="btn-ircatalogo">Ir al Catálogo</Link>
          </div>
        </section>
        <section className="container custom-container">
          <div className="content">
            <img src="src/img/mojito.png" alt="Comenzar Personalización" />
            <h2>Comenzar Personalización</h2>
            <p>Personaliza tu experiencia y encuentra lo que necesitas.</p>
            <Link to="/Alcohol" className="btn-personalizacion">Comenzar Personalización</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const isAdminPage = location.pathname.includes('profile');

  useEffect(() => {
    const handleMouseLeave = () => {
      setShowMenu(false);
    };

    const menuElement = menuRef.current;
    if (menuElement) {
      menuElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (menuElement) {
        menuElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [menuRef]);

  return (
    <div className="menu-container">
      <div className="menu">
        <button className="menu-btn" onClick={toggleMenu}>
          &#9776;
        </button>
        <div className={`dropdown-content ${showMenu ? 'show' : ''}`} ref={menuRef}>
          <Link to="/Login">Administrador</Link>
          {isAdminPage && <Link to="/">Cerrar Sesión</Link>}
          {!isAdminPage && <Link to="/">Ir a inicio</Link>}
          {isAdminPage && (
            <>
              <Link to="/alcohol-profile">Alcohol</Link>
              <Link to="/refresco-profile">Refresco</Link>
              <Link to="/frutas-profile">Frutas</Link>
              <Link to="/extras-profile">Extras</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
