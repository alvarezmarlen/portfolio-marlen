function TarjetaProyecto(props) {
    return (
        <div className="proyecto-card">
            <img src={props.imagen} alt={props.titulo} className="proyecto-img" loading="lazy" />
            <h3>{props.titulo}</h3>
            <p>{props.descripcion}</p>

            <div className="proyecto-links">
                <a href={props.repo} target="_blank" rel="noopener noreferrer" className="btn-link">
                    Codigo en GitHub
                </a>
                <a href={props.demo} target="_blank" rel="noopener noreferrer" className="btn-link">
                    Ver Demo en Vivo
                </a>
            </div>
        </div>
    );
}

export default TarjetaProyecto;
