import Nav from "../../components/Navegation/Nav";
import Background from "../../components/Background/Background";
import Margin from "../../components/Margin/Margin";
import styles from "./Home.module.css";
import computer_me from "../../images/computer_me.png";

function Home() {
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
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
