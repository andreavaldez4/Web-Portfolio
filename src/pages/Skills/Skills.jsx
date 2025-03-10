import Nav from "../../components/Navegation/Nav";
import Background from "../../components/Background/Background";
import Margin from "../../components/Margin/Margin";
import styles from "./Skills.module.css";
import { useState } from "react";

function Skills() {
  return (
    <>
      <Nav />
      <Background />
      <Margin />
      <div className={styles.skillsContainer}>
        <div className={styles.skillsTitle}>
          <p>Skills</p>
        </div>
      </div>
    </>
  );
}

export default Skills;
