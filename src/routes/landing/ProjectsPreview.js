import ExternalLink from "../../assets/images/project-external.png";
import GithubRepo from "../../assets/images/project-source.png";
import { projectsData } from "../../data/projectsData";

const ProjectsPreview = () => {
  return (
    <section className="projects-grid" >
      {projectsData.map((project, index) => (
        <section key={index} className="projects-grid__project card">
          <section className="projects-grid__description" style={{border:' 1px solid white', padding: '10px',borderRadius:'5px'}}>
          <h1 style={{color:'white',fontSize:'30px',textAlign:'center'}}>{project.name}</h1>
            <p className="white-text p-tag">{project.description}</p>
            <section className="projects-grid__stack">
              {project.stack.map((stackName, index) => (
                <p key={index}>{stackName}</p>
              ))}
            </section>
            <section className="projects-grid__links">
              
            </section>
          </section>
        </section>
      ))}
    </section>
  );
};

export default ProjectsPreview;
