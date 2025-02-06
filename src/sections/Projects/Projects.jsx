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
      </p>
      <span className={styles.warning}>
        Apologize for the delay; the Blog Post and Exam Website may take over 50
        seconds to load initially. Thank you for your patience!
      </span>
      <div className={styles.projectContainer}>
        <ProjectCard
          link="https://ubefit.netlify.app/"
          h3="Workout Tracker"
          p1="A full-stack web app featuring secure user authentication, workout logging with database storage, and a dynamic ranking system."
          p2="Learn how to make a basic MERN stack"
        />
        <ProjectCard
          link="https://nodejs-blog-qbtg.onrender.com"
          h3="Blog Post"
          p1="A website that allows you to share your posts with others"
          p2="Learn Express.js and how to connect with MongoDB"
        />

        <ProjectCard
          link="https://madmanjj.github.io/LearnHTML-CSS/"
          h3="Advertise Website"
          p1="A dummy website for practicing HTML and CSS"
          p2="Learn HTML and CSS"
        />
        <ProjectCard
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
