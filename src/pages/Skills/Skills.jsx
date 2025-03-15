import Nav from "../../components/Navegation/Nav";
import Background from "../../components/Background/Background";
import Margin from "../../components/Margin/Margin";
import styles from "./Skills.module.css";
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";

function Skills() {
  const programmingLanguages = [
    { name: "Python", icon: <SiPython /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
  ];

  const technologies = [
    { name: "React", icon: <SiReact /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Pandas", icon: <SiPandas /> },
    { name: "NumPy", icon: <SiNumpy /> },
    { name: "Node.js", icon: <SiNodedotjs /> },

    //{ name: "MySQL", icon: <SiMysql /> },
    //{ name: "MongoDB", icon: <SiMongodb /> },
    //{ name: "Docker", icon: <SiDocker /> },
    //{ name: "Scikit-learn", icon: <SiScikitlearn /> },
    //{ name: "TensorFlow", icon: <SiTensorflow /> },
  ];

  return (
    <>
      <Nav />
      <Background />
      <Margin />
      <div className={styles.skillsContainer}>
        <h1 className={styles.skillsTitle}>Skills</h1>

        <div className={styles.skillsContent}>
          <section className={styles.skillSection}>
            <h2>Programming Languages</h2>
            <div className={styles.skillsGrid}>
              {programmingLanguages.map((lang, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.iconContainer}>{lang.icon}</div>
                  <span>{lang.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.skillSection}>
            <h2>Technologies & Tools</h2>
            <div className={styles.skillsGrid}>
              {technologies.map((tech, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.iconContainer}>{tech.icon}</div>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Skills;
