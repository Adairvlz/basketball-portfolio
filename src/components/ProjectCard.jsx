function ProjectCard({ project }) {
    return (
        <article className="project-card">
            <div className="project-header">
                <span>{project.category}</span>
                <p>Featured Project</p>
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">{project.description}</p>

            <div className="project-tech">
                {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                ))}
            </div>

            <div className="project-links">
                <a href={project.demoUrl} target="_blank">
                    Demo
                </a>
                <a href={project.repoUrl} target="_blank">
                    GitHub
                </a>
            </div>
        </article>
    );
}

export default ProjectCard;