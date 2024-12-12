import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/header.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";
import scrollToElement from "../../common/scrollToElement";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <nav className={styles.Nav}>
          <h2>Navigation</h2>
          <ul>
            <li>
              <a
                href="#"
                onClick={() => {
                  scrollToElement("hero");
                }}
              >
                Name
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  scrollToElement("projects");
                }}
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  scrollToElement("skills");
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  scrollToElement("contact");
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Pannawich
          <br />
          Thamart
        </h1>
        <h2>Developer</h2>

        <span>
          <a href="https://github.com/MadManJJ" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing mordern React web apps for commercial
          businesses.
        </p>
        <a href={CV} target="_blank">
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
