import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle projectTitle">Projects</h1>
      <p>
        Some projects are still a work in progress and may take a while to load.
        Thank you for your patience!
      </p>
      <div className={styles.projectContainer}>
        <ProjectCard
          src={viberr}
          link="https://nodejs-blog-qbtg.onrender.com"
          h3="Blog Post"
          p="A Website that let you share your post with other (Learn Express.js and how to connect with MongoDB  "
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
