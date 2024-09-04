import styles from "./ProjectsStyles.module.css";
import powdercoating from "../../assets/powdercoating.png";
import responsive from "../../assets/responsive.png";
import fudiweb from "../../assets/fudiweb.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={powdercoating}
          link="https://powdercoatingcr.com"
          h3="Powder Coating"
          p="Wordpress with Elementor"
        />
        <ProjectCard
          src={responsive}
          link="https://github.com/Liebres/responsive-web"
          h3="Responsive Design"
          p="HTML, CSS & Javascript"
        />
        <ProjectCard
          src={fudiweb}
          link="https://github.com/Liebres/Fudi-Web"
          h3="Fudi Web"
          p="Web and App Design"
        />
      </div>
    </section>
  );
}
export default Projects;
