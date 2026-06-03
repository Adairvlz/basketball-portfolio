function Hero() {
    return (
        <section className="hero section" id="home">
            <div className="hero-content">
                <p className="eyebrow">Full-Stack Rookie Portfolio</p>

                <h1>
                    Adair Velasquez
                    <span>Junior Full-Stack Web Developer</span>
                </h1>

                <p className="hero-description">
                    Estudiante universitario enfocado en desarrollo web full-stack.
                    Construyo interfaces modernas, conecto aplicaciones con APIs REST y
                    organizo proyectos con buenas prácticas de código, documentación y
                    control de versiones.
                </p>

                <div className="hero-actions">
                    <a href="#projects" className="btn primary">
                        Ver proyectos
                    </a>
                    <a href="#contact" className="btn secondary">
                        Contacto
                    </a>
                </div>
            </div>

            <article className="player-card">
                <div className="card-top">
                    <span className="overall">87</span>
                    <span className="position">DEV</span>
                </div>

                <div className="player-avatar">
                    <span>AC</span>
                </div>

                <div className="player-info">
                    <h2>ADAIR</h2>
                    <p>Full-Stack Rookie</p>
                </div>

                <div className="stats-grid">
                    <div>
                        <strong>React</strong>
                        <span>Frontend</span>
                    </div>
                    <div>
                        <strong>REST</strong>
                        <span>APIs</span>
                    </div>
                    <div>
                        <strong>Docker</strong>
                        <span>Deploy</span>
                    </div>
                    <div>
                        <strong>Git</strong>
                        <span>Control</span>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Hero;