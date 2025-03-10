import Nav from "../../components/Navegation/Nav";
import Background from "../../components/Background/Background";
import Margin from "../../components/Margin/Margin";
import styles from "./Personal.module.css";
import { useState } from "react";

function Personal() {
  return (
    <>
      <Nav />
      <Background />
      <Margin />
      <div className={styles.personalContainer}>
        <div className={styles.personalTitle}>
          <p>Personal</p>
        </div>
      </div>
    </>
  );
}

export default Personal;
