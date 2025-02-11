import Nav from "../../components/Navegation/Nav";
import Background from "../../components/Background/Background";
import Margin from "../../components/Margin/Margin";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Nav />
      <Background />
      <Margin />
      <div className={styles.textContainer}>
        <div className={styles.textContent}>
          <p>Hello, I'm</p>
          <p>Andrea</p>
          <p>Valdez</p>
        </div>
      </div>
    </>
  );
}

export default Home;
