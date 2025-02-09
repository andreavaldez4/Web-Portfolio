import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Nav from "./components/Navegation/Nav";
import Background from "./components/Background/Background";
import Margin from "./components/Margin/Margin";
import Text from "./components/Text/Text";

function Home() {
  return (
    <div>
      <Nav />
      <Background />
      <Margin />
      <Text />
    </div>
  );
}

export default Home;
