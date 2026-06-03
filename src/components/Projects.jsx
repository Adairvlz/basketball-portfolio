import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

function Projects() {
    return (
        <section className="section projects" id="projects">
            <div className="section-heading">
                <p className="eyebrow">Project Highlights</p>
                <h2>Proyectos</h2>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard project={project} key={project.title} />
                ))}
            </div>
        </section>
    );
}

export default Projects;