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
          p1="A Website that let you share your post with other"
          p2="Learn Express.js and how to connect with MongoDB"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/MadManJJ"
          h3="Fresh Burger"
          p1="Hamburger"
        />
        <ProjectCard
          src={viberr}
          link="https://madmanjj.github.io/LearnHTML-CSS/"
          h3="Advertise Website"
          p1="A dummy website that I learn HTML, CSS"
          p2="Learn HTML and CSS"
        />
        <ProjectCard
          src={viberr}
          link="https://webapp-t0jw.onrender.com"
          h3="Exam Website"
          p1="A webAplication that let you browse previous year exam TGAT , ALEVEL ,... and also include a Quiz."
          p2="Learn some Flask using python"
        />
      </div>
    </section>
  );
}

export default Projects;
