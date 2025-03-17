import { useState, useEffect } from "react";
import Nav from "../../components/Navegation/Nav";
import Background from "../../components/Background/Background";
import styles from "./Projects.module.css";
import ProjectCard from "../../components/Cards/Cards";

import edumakers_logo from "../../images/edumakers_logo.jpg";
import maps from "../../images/maps.jpg";
import spotify_data from "../../images/spotify.jpg";
import coffeeinv from "../../images/coffeeinv.jpg";
import neuma from "../../images/neuma.jpeg";

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
      image: maps,
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
      image: coffeeinv,
    },
    {
      id: "edumakers-webpage",
      title: "Web app for Edumakers ",
      description:
        "Take the Braille STL python project and convert them into a web app, with a simple interface for users to interact with the Braille plates.",
      image: edumakers_logo,
    },
    {
      id: "neuma-merch",
      title: "Neuma Merch Webpage",
      description:
        "Developed an e-commerce website for Neuma, a Catholic band, integrating a secure payment system and optimizing user experience for seamless online merchandise sales.",
      image: neuma,
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1200) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalPages = Math.ceil(projects.length / cardsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const displayedProjects = isMobile
    ? projects
    : projects.slice(
        currentPage * cardsPerPage,
        (currentPage + 1) * cardsPerPage
      );

  return (
    <>
      <Nav />
      <Background />
      <div className={styles.projectsContainer}>
        <h1 className={styles.projectsTitle}>Projects</h1>
        <div className={styles.cardsSection}>
          {!isMobile && (
            <button className={styles.navButton} onClick={prevPage}>
              &lt;
            </button>
          )}
          <div className={styles.cardsContainer}>
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={index}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
              />
            ))}
          </div>
          {!isMobile && (
            <button className={styles.navButton} onClick={nextPage}>
              &gt;
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Projects;
