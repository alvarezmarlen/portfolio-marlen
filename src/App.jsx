import "./App.css";
import TarjetaProyecto from './components/TarjetaProyecto';
import { misProyectos } from './data/proyectos.js';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import SobreMi from "./components/SobreMi.jsx";
import Contacto from "./components/Contacto.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <div className="portfolio-container">
      <Navbar/>
      <Hero/>
      <SobreMi/>

      {/* Aquí irán tus proyectos más adelante */}
      <section id="proyectos" className="projects-grid">
        {misProyectos.map((proyecto) => (
          <TarjetaProyecto 
            key={proyecto.id} 
            titulo={proyecto.titulo} 
            descripcion={proyecto.descripcion} 
            imagen={proyecto.imagen}
            repo={proyecto.repo}
            demo={proyecto.demo}
          />
        ))}
      </section>
      <Contacto/>
      <ScrollToTop/>
    </div>
  );
}

export default App;