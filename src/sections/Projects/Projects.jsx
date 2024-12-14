import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle projectTitle">Projects</h1>
      <p>
        Some are still a work in progress and may require further improvement.
      </p>
      <div className={styles.projectContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/MadManJJ"
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/MadManJJ"
          h3="Fresh Burger"
          p="Hamburger"
        />
        <ProjectCard
          src={viberr}
          link="https://github.com/MadManJJ"
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={viberr}
          link="https://github.com/MadManJJ"
          h3="Viberr"
          p="Streaming App"
        />
      </div>
    </section>
  );
}

export default Projects;
