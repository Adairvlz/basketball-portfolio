function Navbar() {
    return (
        <header className="navbar">
            <a href="#home" className="logo">
                <span className="logo-mark">⬡</span>
                Adair.dev
            </a>

            <nav>
                <a href="#about">Sobre mí</a>
                <a href="#tech">Tecnologías</a>
                <a href="#stack">Stack</a>
                <a href="#projects">Proyectos</a>
                <a href="#contact">Contacto</a>
            </nav>
        </header>
    );
}

export default Navbar;