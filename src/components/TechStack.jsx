const technologies = [
    {
        role: "Point Guard",
        title: "Frontend",
        stack: "React, Vite, JSX, HTML, CSS",
        description:
            "Construcción de interfaces modernas, componentes reutilizables y SPAs responsivas.",
    },
    {
        role: "Shooting Guard",
        title: "JavaScript",
        stack: "Async/Await, Fetch API, estado, eventos",
        description:
            "Consumo de APIs, manejo de datos y lógica interactiva dentro de aplicaciones web.",
    },
    {
        role: "Small Forward",
        title: "Backend",
        stack: "Laravel, Node.js, APIs REST, FastAPI",
        description:
            "Creación y consumo de servicios para conectar el frontend con datos reales.",
    },
    {
        role: "Power Forward",
        title: "Database",
        stack: "PostgreSQL, SQL, relaciones",
        description:
            "Diseño de bases de datos, consultas, relaciones y reportes para aplicaciones.",
    },
    {
        role: "Center",
        title: "DevOps / Tools",
        stack: "Docker, Docker Compose, Git, GitHub",
        description:
            "Organización de repositorios, control de versiones y entornos de desarrollo.",
    },
];

function TechStack() {
    return (
        <section className="section tech" id="tech">
            <div className="section-heading">
                <p className="eyebrow">Tech Lineup</p>
                <h2>Tecnologías utilizadas</h2>
            </div>

            <div className="tech-grid">
                {technologies.map((item) => (
                    <article className="tech-card" key={item.title}>
                        <span>{item.role}</span>
                        <h3>{item.title}</h3>
                        <strong>{item.stack}</strong>
                        <p>{item.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default TechStack;