import { useParams } from "react-router-dom";
import Nav from "../../components/Navegation/Nav";
import Background from "../../components/Background/Background";
import Margin from "../../components/Margin/Margin";
import styles from "./ProjectDetail.module.css";

// Importar las imágenes
import edumakers_logo from "../../images/edumakers_logo.jpg";
import maps from "../../images/maps.jpg";
import spotify_data from "../../images/spotify.jpg";
import coffee_shop from "../../images/coffee_shop.jpg";
import the_team from "../../images/the_team.jpeg";
import names_team from "../../images/names_team.jpeg";
import impresiones from "../../images/impresiones.jpeg";
import edwebp from "../../images/edwebp.jpeg";
import neuma from "../../images/neuma.jpeg";

const projectsData = {
  edumakers: {
    title: "Edumakers",
    description:
      "convert text into Braille and generate STL files for 3D printing, enabling accessible educational materials for visually impaired students.",
    image: edumakers_logo,
    fullDescription:
      "Developed a Python-based software that converts text into Braille-ready STL files for 3D printing, enhancing accessibility in education. The project involved implementing data processing algorithms, automating STL generation using NumPy-STL and Pandas, and designing a modular system for custom Braille plates. Additionally, I contributed to database structuring for 3D representations of Braille characters, integrated Blender scripting for text extrusion, and provided comprehensive user documentation. Inspired by collaboration with Wake Forest University, this initiative aligns with assistive technology advancements to improve educational inclusivity.",
    technologies: ["Python", "STL", "3D Printing"],
    github: "https://github.com/EduMakers-Tec/Braille_STL",
    projectImages: [
      {
        image: the_team,
        description: "Braille STL project team.",
      },
      {
        image: names_team,
        description: "Braille Plates with our names.",
      },
      {
        image: impresiones,
        description: "3D printed Braille Plates for biology study materials.",
      },
    ],
  },
  "gps-data": {
    title: "GPS Data Mobility",
    description:
      "Analyzed GPS data using Python to identify mobility patterns and estimate energy consumption and emissions.",
    image: maps,
    fullDescription:
      "Developed software for MAITEC, a decision-support platform leveraging digital twin technology to assess urban mobility strategies' impact on energy consumption, air quality, and public health in Monterrey. Worked with GIS-based systems integrating demographic, infrastructure, and environmental data. Contributed to processing GPS-based big data for urban travel analysis, enabling high-resolution traffic modeling and scenario simulation to optimize mobility, reduce emissions, and enhance urban sustainability.",
    technologies: ["Python", "Pandas", "Data Analysis"],
  },
  "spotify-analysis": {
    title: "Spotify Data Analysis",
    description:
      "Analyzed Spotify datasets using Python, using Pandas and Matplotlib for data processing and visualization.",
    image: spotify_data,
    fullDescription:
      " Analyzed Spotify datasets using Python, using Pandas and Matplotlib for data processing and visualization. Developed functions to generate frequency and popularity graphs, extract key statistics, and filter tracks by popularity, duration, tempo, and loudness. Implemented an interactive program for dynamic data exploration, enhancing analytical insights.",
    technologies: ["Python", "Pandas", "Matplotlib"],
  },
  "coffee-shop": {
    title: "Coffee Shop Inventory",
    description:
      "Implemented an object-oriented C++ program for a coffee shop inventory system.",
    image: coffee_shop,
    fullDescription:
      "Developed an object-oriented C++ program for a coffee shop inventory system, optimizing product record management through class-based structures. Designed and documented a UML class diagram to model system architecture, ensuring scalability and maintainability. Integrated user input handling and validation mechanisms to enhance system robustness and prevent errors.",
    technologies: ["C++", "OOP", "Data Structures"],
  },

  "edumakers-webpage": {
    title: "Edumakers Webpage",
    description:
      "Take the Braille STL python project and convert them into a web app, with a simple interface for users to interact with the Braille plates.",
    image: edwebp,
    fullDescription:
      "Converted Braille STL files into a web application with a user-friendly interface, allowing users to interact with and visualize Braille plates. Implemented intuitive navigation and optimized 3D rendering for accessibility and ease of use.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  "neuma-merch": {
    title: "Neuma Merch Webpage",
    description:
      "Developed an e-commerce website for Neuma, a Catholic band, integrating a secure payment system and optimizing user experience for seamless online merchandise sales.",
    image: neuma,
    fullDescription:
      "Developed and deployed a fully functional e-commerce webpage for Neuma, a Catholic band, enabling online merchandise sales. Implemented a secure and user-friendly payment system, ensuring seamless transactions. Designed the site with an intuitive interface and responsive layout to enhance user experience, while optimizing performance and scalability to support future growth.",
    technologies: ["HTML", "CSS", "JavaScript"],
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
          </div>
        </div>
        {project.projectImages && (
          <div className={styles.imageGallery}>
            <h2>Project Gallery</h2>
            <div className={styles.imagesGrid}>
              {project.projectImages.map((img, index) => (
                <div key={index} className={styles.imageContainer}>
                  <img src={img.image} alt={img.description} />
                  <p className={styles.imageDescription}>{img.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProjectDetail;
