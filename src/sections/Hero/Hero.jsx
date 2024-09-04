import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Liebre-Perfil.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/CV Leandro Barrantes.pdf";
import { useTheme } from "../../common/ThemeContext";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  const [text] = useTypewriter({
    words: ["curiosity", "passion", "enthusiasm"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Foto perfil Leandro" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Leandro
          <br />
          Barrantes
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://x.com/Leandrencio" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/Liebres" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/leandro-barrantes-2a269228a/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
        </span>
        <p className={styles.description}>
          Guided by {""}
          <strong style={{ fontWeight: "bold", color: "#007eef" }}>
            {text}
          </strong>
          <span style={{ color: "black" }}></span> for learning and creating, I
          design and develop React web apps that turn ideas into impactful
          digital experiences.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
