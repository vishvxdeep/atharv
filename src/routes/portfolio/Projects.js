import ExternalLink from "../../assets/images/project-external.png";
import GithubRepo from "../../assets/images/project-source.png";
import { projectsData } from "../../data/projectsData";

const Projects = () => {
  return (
    <section className="projects-grid">
      {projectsData.map((project) => (
        <section key={project.id} className="projects-grid__project">
        
          <section className="projects-grid__description">
            <p className="white-text p-tag">{project.description}</p>
            <section className="projects-grid__stack">
              {project.stack.map((stackName, index) => (
                <p key={index}>{stackName}</p>
              ))}
            </section>
            <section className="projects-grid__links">
              <a href={project.src} target="_blank" rel="noreferrer">
                <img src={ExternalLink} alt="Link to project" />
              </a>
              <a href={project.source} target="_blank" rel="noreferrer">
                <img src={GithubRepo} alt="Link to Github" />
              </a>
            </section>
          </section>
        </section>
      ))}
    </section>
  );
};

export default Projects;
