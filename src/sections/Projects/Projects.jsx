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
          p1="A website that allows you to share your posts with others"
          p2="Learn Express.js and how to connect with MongoDB"
        />

        <ProjectCard
          src={viberr}
          link="https://madmanjj.github.io/LearnHTML-CSS/"
          h3="Advertise Website"
          p1="A dummy website for practicing HTML and CSS"
          p2="Learn HTML and CSS"
        />
        <ProjectCard
          src={viberr}
          link="https://webapp-t0jw.onrender.com"
          h3="Exam Website"
          p1="A web application that allows you to browse previous years' TGAT, A-LEVEL, and other exams, and also includes a quiz feature"
          p2="Learn some Flask using python and learn some skills in JavaScript"
        />
      </div>
    </section>
  );
}

export default Projects;
