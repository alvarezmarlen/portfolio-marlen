function SobreMi() {
  return (
    <section id="sobre-mi" className="about-container">
      {/* Columna Izquierda: Tu historia */}
      <div className="about-main-text">
        <h2>Sobre mí</h2>
        
        <div className="about-item">
          <h3>Perfil Profesional 💼</h3>
          <p>Soy Licenciada en Administración de Empresas con una sólida trayectoria en la gestión de procesos y organización de datos. Mi formación me permite abordar problemas complejos con una visión analítica y estructurada, habilidades que actualmente estoy expandiendo hacia el Desarrollo Web Full Stack, integrando tecnologías modernas y soluciones con Inteligencia Artificial.</p>
        </div>

        <div className="about-item">
          <h3>Factor Humano ✨</h3>
          <p>Actualmente, aplico mi capacidad organizativa al Desarrollo Web Full Stack mediante un enfoque de aprendizaje activo. Domino tecnologías front-end y back-end, mientras trabajo en equipo aplicando la metodología ágil Scrum con entregas continuas.</p>
        </div>

        <div className="about-item">
          <h3>Evolución Tecnológica 🚀</h3>
          <p>Actualmente, aplico mi capacidad organizativa al Desarrollo Full Stack, dominando HTML5 y CSS3, mientras profundizo en JavaScript, Python y metodologías ágiles como Scrum.</p>
        </div>
      </div>

      {/* Columna Derecha: Habilidades */}
      <aside className="skills-sidebar">
        <h3>Skills & Herramientas</h3>
        <div className="skills-group">
          <h4>Tecnologías</h4>
          <ul>
            <li>HTML5 / CSS3</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>Vue.js</li>
            <li>Python / Flask</li>
            <li>SQLite / PostgreSQL</li>
            <li>MongoDB</li>
            <li>Docker</li>
            <li>OpenCode (AI)</li>
          </ul>
        </div>
        <div className="skills-group">
          <h4>Gestión</h4>
          <ul>
            <li>Metodología Scrum (Jira / Trello)</li>
            <li>Git / GitHub</li>
            <li>Figma</li>
            <li>MS Office</li>
            <li>Google Workspace</li>
          </ul>
        </div>
      </aside>
    </section>
  );
}

export default SobreMi;