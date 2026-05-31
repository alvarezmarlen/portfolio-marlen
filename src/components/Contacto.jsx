function Contacto() {
  const miTelefono = "34613079678"; 
  const miMensaje = encodeURIComponent("Hola Marlen, he visto tu portfolio y me gustaría contactar contigo.");
  const enlaceWhatsApp = `https://wa.me/${miTelefono}?text=${miMensaje}`;

  return (
    <section id="contacto" className="contact-section">
      <h2>Contacto</h2>
      
      <div className="contact-layout">
        {/* COLUMNA 1: FORMULARIO */}
        <form className="contact-form" action="https://formspree.io/f/mnjryldy" method="POST">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" name="name" type="text" placeholder="Tu nombre..." required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="tu@email.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="message" rows="5" placeholder="¿En qué puedo ayudarte?" required></textarea>
          </div>
          <button type="submit" className="btn-primary">Enviar Mensaje</button>
        </form>

        {/* COLUMNA 2: INFO Y REDES */}
        <div className="contact-info">
          <h3>Conecta conmigo ✨</h3>
          <div className="social-links">
            <a href={enlaceWhatsApp} target="_blank" rel="noopener noreferrer" className="social-item">
              WhatsApp 📱
            </a>
            <a href="https://www.linkedin.com/in/marlenalvarez/" target="_blank" rel="noopener noreferrer" className="social-item">
              LinkedIn 💼
            </a>
            <a href="https://github.com/alvarezmarlen" target="_blank" rel="noopener noreferrer" className="social-item">
              GitHub 🚀
            </a>
          </div>
          <a href="/CV_Marlen_Alvarez.pdf" download="CV_Marlen_Alvarez.pdf" className="btn-cv">
            Descargar CV (PDF) 📄
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacto;