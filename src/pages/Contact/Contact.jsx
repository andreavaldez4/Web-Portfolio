import Nav from "../../components/Navegation/Nav";
import Background from "../../components/Background/Background";
import styles from "./Contact.module.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import curriculumVitae from "../../curriculum/curriculumVitae.pdf";

function Contact() {
  return (
    <>
      <Nav />
      <Background />
      <div className={styles.contactContainer}>
        <h1 className={styles.title}>Contact Me</h1>
        <div className={styles.cardsContainer}>
          <a
            href="mailto:valdezandrea2006@gmail.com"
            className={styles.contactCard}
          >
            <FaEnvelope className={styles.icon} />
            <h3>Email</h3>
            <p>valdezandrea2006@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/andreavaldez-cs-engineer/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <FaLinkedin className={styles.icon} />
            <h3>LinkedIn</h3>
            <p>andreavaldez-cs-engineer</p>
          </a>

          <a
            href="https://github.com/AndreaValdez4"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <FaGithub className={styles.icon} />
            <h3>GitHub</h3>
            <p>AndreaValdez4</p>
          </a>

          <a
            href={curriculumVitae}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <FaFileAlt className={styles.icon} />
            <h3>Resume</h3>
            <p>View my CV</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
