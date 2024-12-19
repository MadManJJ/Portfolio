import styles from "./HeroStyles.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/resume.pdf";
import { useTheme } from "../../common/ThemeContext";
import scrollToElement from "../../common/scrollToElement";
import emailDark from "../../assets/email-dark3.png";
import emailLight from "../../assets/email-light3.png";
import callLight from "../../assets/call-light2.png";
import callDark from "../../assets/call-dark2.png";
import ContactBlock from "../../common/ContactBlock";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const callIcon = theme === "light" ? callLight : callDark;
  const emailIcon = theme === "light" ? emailLight : emailDark;
  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;

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
        <h1>Welcome.</h1>
        <p className={styles.description}>
          My name is <strong>Pannawich Thamart</strong>. I’m a developer
          passionate about creating accessible websites and applications, and I
          love what I do.
        </p>
        <p className={styles.description}>
          Currently, I'm studying at Chulalongkorn University,
        </p>
        <p className={styles.description}>
          In my spare time, I’m usually watching movies or series, reading a
          fantasy or scifi book.
        </p>
        <div className={styles.contactContainer}>
          <ContactBlock
            icon={emailIcon}
            text=": pannawichthamart@gmail.com"
            alt="Email icon"
            claN={styles.contactblock}
          />
          <ContactBlock
            icon={callIcon}
            text=": 099-6173910"
            alt="Call icon"
            claN={styles.contactblock}
          />
        </div>
        <span>
          <a href="https://github.com/MadManJJ" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
        </span>

        <a href={CV} target="_blank">
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
