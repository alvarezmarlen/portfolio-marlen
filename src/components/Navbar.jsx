function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Aquí puedes usar la clase .logo-small que ya tienes en el CSS */}
        <img src="/favicon.jpg" alt="Logo" className="logo-small" />
        <span>Marlen Alvarez</span>
      </div>
      
      <ul className="nav-links">
        <li><a href="#sobre-mi">Sobre mí</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;