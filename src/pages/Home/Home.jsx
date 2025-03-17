import Nav from "../../components/Navegation/Nav";
import Background from "../../components/Background/Background";
import Margin from "../../components/Margin/Margin";
import styles from "./Home.module.css";
import computer_me from "../../images/computer_me.png";
import { useState } from "react";

function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Nav />
      <Background />
      <Margin />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <p>Hello, I'm</p>
            <p>Andrea</p>
            <p>Valdez</p>
            <p>Computer Science Student</p>
          </div>
          <div className={styles.imageContainer}>
            <img
              src={computer_me}
              alt="mi foto"
              className={styles.profileImage}
              onClick={() => setShowModal(true)}
              style={{ cursor: "pointer" }}
            />
            <div className={styles.contactOverlay}>
              <span>Contact Me</span>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalCard}>
            <button
              className={styles.closeButton}
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <h2>Contact Information</h2>
            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <span className={styles.label}>Email:</span>
                <a href="mailto:valdezandrea2006@gmail.com">
                  valdezandrea2006@gmail.com
                </a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>LinkedIn:</span>
                <a
                  href="https://www.linkedin.com/in/andreavaldez-cs-engineer/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com/in/andreavaldez-cs-engineer/
                </a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>GitHub:</span>
                <a
                  href="https://github.com/AndreaValdez4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/andreavaldez4
                </a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Location:</span>
                <span>Monterrey, México</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
