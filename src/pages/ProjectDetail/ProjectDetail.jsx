import { useParams } from "react-router-dom";
import Nav from "../../components/Navegation/Nav";
import Background from "../../components/Background/Background";
import Margin from "../../components/Margin/Margin";
import styles from "./ProjectDetail.module.css";

// Importar las imágenes
import edumakers_logo from "../../images/edumakers_logo.jpg";
import gps_data from "../../images/mapa.png";
import spotify_data from "../../images/spotify.jpg";
import coffee_shop from "../../images/coffee_shop.jpg";

const projectsData = {
  edumakers: {
    title: "Edumakers",
    description:
      "convert text into Braille and generate STL files for 3D printing, enabling accessible educational materials for visually impaired students.",
    image: edumakers_logo,
    fullDescription:
      "Developed a Python-based software that converts text into Braille-ready STL files for 3D printing, enhancing accessibility in education. The project involved implementing data processing algorithms, automating STL generation using NumPy-STL and Pandas, and designing a modular system for custom Braille plates. Additionally, I contributed to database structuring for 3D representations of Braille characters, integrated Blender scripting for text extrusion, and provided comprehensive user documentation. Inspired by collaboration with Wake Forest University, this initiative aligns with assistive technology advancements to improve educational inclusivity.",
    technologies: ["Python", "STL", "3D Printing"],
    github: "https://github.com/yourusername/edumakers",
  },
  "gps-data": {
    title: "GPS Data Mobility",
    description:
      "Analyzed GPS data using Python to identify mobility patterns and estimate energy consumption and emissions.",
    image: gps_data,
    fullDescription:
      "Un análisis profundo de patrones de movilidad usando datos GPS...",
    technologies: ["Python", "Pandas", "Data Analysis"],
    github: "https://github.com/yourusername/gps-data",
  },
  "spotify-analysis": {
    title: "Spotify Data Analysis",
    description:
      "Analyzed Spotify datasets using Python, using Pandas and Matplotlib for data processing and visualization.",
    image: spotify_data,
    fullDescription: "Análisis completo de datos de Spotify...",
    technologies: ["Python", "Pandas", "Matplotlib"],
    github: "https://github.com/yourusername/spotify-analysis",
  },
  "coffee-shop": {
    title: "Coffee Shop Inventory",
    description:
      "Implemented an object-oriented C++ program for a coffee shop inventory system.",
    image: coffee_shop,
    fullDescription: "Sistema de inventario desarrollado en C++...",
    technologies: ["C++", "OOP", "Data Structures"],
    github: "https://github.com/yourusername/coffee-shop",
  },
};

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData[id];

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <>
      <Nav />
      <Background />
      <Margin />
      <div className={styles.projectContainer}>
        <h1 className={styles.projectTitle}>{project.title}</h1>
        <div className={styles.contentContainer}>
          <img
            src={project.image}
            alt={project.title}
            className={styles.projectImage}
          />
          <div className={styles.projectInfo}>
            <h2>Description</h2>
            <p>{project.fullDescription}</p>
            <h2>Technologies</h2>
            <div className={styles.technologies}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              See on GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetail;
