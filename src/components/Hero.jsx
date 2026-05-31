import miFoto from '../assets/images/my_photo.jpg'; 

function Hero() {
  return (
    <section className="hero-content">
      <div className="hero-text">
        <h1>Hola, soy Marlen</h1>
        <p>Estudiante de programación en Bolueta. Me apasiona crear soluciones digitales y aprender nuevas tecnologías cada día.</p>
        <a href="#proyectos" className="btn-primary">
          Ver mis proyectos 
        </a>
      </div>
      
      <div className="hero-image">
        {/* Aquí puedes usar una imagen tuya o una ilustración de programación */}
        <img src={miFoto} alt="Marlen - Desarrolladora" />
      </div>
    </section>
  );
}

export default Hero;