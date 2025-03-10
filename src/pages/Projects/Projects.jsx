import { useState, useEffect } from "react";
import Nav from "../../components/Navegation/Nav";
import Background from "../../components/Background/Background";
import Margin from "../../components/Margin/Margin";
import styles from "./Projects.module.css";
import ProjectCard from "../../components/Cards/Cards";

import edumakers_logo from "../../images/edumakers_logo.jpg";
import gps_data from "../../images/mapa.png";
import spotify_data from "../../images/spotify.jpg";
import coffee_shop from "../../images/coffee_shop.jpg";

function Projects() {
  const projects = [
    {
      id: "edumakers",
      title: "Edumakers",
      description:
        "Developed a Python application to convert text into Braille and generate STL files for 3D printing, enabling accessible educational materials for visually impaired students.",
      image: edumakers_logo,
    },
    {
      id: "gps-data",
      title: "GPS Data Mobility",
      description:
        "Analyzed GPS data using Python to identify mobility patterns and estimate energy consumption and emissions.",
      image: gps_data,
    },
    {
      id: "spotify-analysis",
      title: "Spotify Data Analysis",
      description:
        "Analyzed Spotify datasets using Python, using Pandas and Matplotlib for data processing and visualization.",
      image: spotify_data,
    },
    {
      id: "coffee-shop",
      title: "Coffee Shop inventory in C++",
      description:
        "Implemented an object-oriented C++ program for a coffee shop inventory system, managing product records efficiently through class-based structures.",
      image: coffee_shop,
    },
    {
      title: "Proyecto 5",
      description: "Descripción del proyecto 5",
      image: gps_data,
    },
    {
      title: "Proyecto 6",
      description: "Descripción del proyecto 6",
      image: spotify_data,
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const totalPages = Math.ceil(projects.length / cardsPerPage);

  // Ajustar cards por página según el ancho de la ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1200) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    handleResize(); // Ejecutar al inicio
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentProjects = projects.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  return (
    <>
      <Nav />
      <Background />
      <Margin />
      <div className={styles.projectsContainer}>
        <h1 className={styles.projectsTitle}>Projects</h1>
        <div className={styles.cardsSection}>
          <button className={styles.navButton} onClick={prevPage}>
            &lt;
          </button>
          <div className={styles.cardsContainer}>
            {currentProjects.map((project, index) => (
              <ProjectCard
                key={index}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
              />
            ))}
          </div>
          <button className={styles.navButton} onClick={nextPage}>
            &gt;
          </button>
        </div>
      </div>
    </>
  );
}

export default Projects;
