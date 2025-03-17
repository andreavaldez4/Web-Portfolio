import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Personal from "./pages/Personal/Personal";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import Contact from "./pages/Contact/Contact";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
