import Nav from "../../components/Navegation/Nav";
import Background from "../../components/Background/Background";
import styles from "./Personal.module.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

// Importa las imágenes
import running1 from "../../images/running1.jpeg";
import running2 from "../../images/running2.jpeg";
import running3 from "../../images/running3.jpeg";
import running4 from "../../images/running4.jpeg";
import running5 from "../../images/running5.jpeg";
// Tennis
import tennis1 from "../../images/tennis1.jpeg";
import tennis2 from "../../images/tennis2.jpeg";
import tennis3 from "../../images/tennis3.jpeg";
// Youth Group
import grupo0 from "../../images/grupo0.jpeg";
import grupo1 from "../../images/grupo1.jpeg";
import grupo2 from "../../images/grupo2.jpeg";
import grupo3 from "../../images/grupo3.jpeg";
import grupo4 from "../../images/grupo4.jpeg";
import grupo5 from "../../images/grupo5.jpeg";
// Travel
import viaje1 from "../../images/viaje1.jpeg";
import viaje2 from "../../images/viaje2.jpeg";
import viaje3 from "../../images/viaje3.jpeg";
// Salsa
import salsa1 from "../../images/salsa1.jpeg";
import salsa2 from "../../images/salsa2.jpeg";
import salsa3 from "../../images/salsa3.jpeg";
import salsa4 from "../../images/salsa4.jpeg";
import salsa5 from "../../images/salsa5.jpeg";
// Friends
import friends1 from "../../images/friends1.jpeg";
import friends2 from "../../images/friends2.jpeg";
import friends3 from "../../images/friends3.jpeg";
import friends4 from "../../images/friends4.jpeg";
import friends5 from "../../images/friends5.jpeg";
import friends6 from "../../images/friends6.jpeg";
import friends7 from "../../images/friends7.jpeg";
import friends8 from "../../images/friends8.jpeg";
// Missions
import missions1 from "../../images/missions1.jpeg";
import missions2 from "../../images/missions2.jpeg";
import missions3 from "../../images/missions3.jpeg";
import missions4 from "../../images/missions4.jpeg";
import missions5 from "../../images/missions5.jpeg";
import missions6 from "../../images/missions6.jpeg";

function Personal() {
  const [activeTab, setActiveTab] = useState("running");

  const personalInterests = [
    {
      id: "running",
      title: "Running",
      images: [
        { src: running1, alt: "Running in the park" },
        { src: running2, alt: "5K race" },
        { src: running3, alt: "Training" },
        { src: running4, alt: "Running in the park" },
        { src: running5, alt: "Running in the park" },
      ],
      description:
        "Running helps me clear my mind and stay in shape. I regularly participate in 5K and 10K races, pushing myself to improve with each run. This year, my goal is to complete a half marathon, challenging my endurance and achieving a new personal milestone.",
      icon: "🏃‍♀️",
    },
    {
      id: "tennis",
      title: "Tennis",
      images: [
        { src: tennis2, alt: "Playing tennis" },
        { src: tennis1, alt: "Training" },
        { src: tennis3, alt: "Tennis match" },
      ],
      description:
        "Tennis is my favorite sport. I've been playing since I was 12 years old, and I enjoy both singles and doubles matches with friends on weekends. It's a great way to stay active, improve my skills, and challenge myself while having fun on the court.",
      icon: "🎾",
    },
    {
      id: "youth",
      title: "Youth Group",
      images: [
        { src: grupo0, alt: "Actividad grupal" },
        { src: grupo1, alt: "Voluntariado" },
        { src: grupo2, alt: "Voluntariado" },
        { src: grupo3, alt: "Voluntariado" },
        { src: grupo4, alt: "Voluntariado" },
        { src: grupo5, alt: "Voluntariado" },
      ],
      description:
        "I am part of a Catholic youth group where we organize community activities, volunteer work, and social events. Through our gatherings, we strengthen our faith, support those in need, and build meaningful friendships. It is a great way to contribute to society, develop leadership skills, and grow both personally and spiritually.",
      icon: "👥",
    },
    {
      id: "travel",
      title: "Travel",
      images: [
        { src: viaje1, alt: "Viaje a la playa" },
        { src: viaje2, alt: "Explorando la ciudad" },
        { src: viaje3, alt: "Explorando la ciudad" },
      ],
      description:
        "I really like to travel because it allows me to explore new cultures, try different foods, and experience unique moments in every place I visit. Traveling also helps me broaden my perspective, meet new people, and create unforgettable memories along the way.",
      icon: "✈️",
    },
    {
      id: "salsa",
      title: "Salsa",
      images: [
        { src: salsa1, alt: "Bailando salsa" },
        { src: salsa2, alt: "Clase de baile" },
        { src: salsa3, alt: "Clase de baile" },
        { src: salsa4, alt: "Clase de baile" },
        { src: salsa5, alt: "Clase de baile" },
      ],
      description:
        "Salsa is my favorite dance style. I've had the opportunity to perform in various auditoriums, and I absolutely love the energy and rhythm of the music. Dancing allows me to express myself, stay active, and share my passion with others on stage.",
      icon: "💃",
    },
    {
      id: "friends",
      title: "Friends",
      images: [
        { src: friends1, alt: "Reunión con amigos" },
        { src: friends2, alt: "Salida grupal" },
        { src: friends3, alt: "Salida grupal" },
        { src: friends4, alt: "Salida grupal" },
        { src: friends5, alt: "Salida grupal" },
        { src: friends6, alt: "Salida grupal" },
        { src: friends7, alt: "Salida grupal" },
        { src: friends8, alt: "Salida grupal" },
      ],
      description:
        "Spending time with friends is essential for me. I love getting together with them, making plans, and sharing meaningful experiences. Whether it's a simple hangout or a fun outing, every moment spent together strengthens our bond and creates unforgettable memories.",
      icon: "🤝",
    },
    {
      id: "missions",
      title: "Missions",
      images: [
        { src: missions1, alt: "Misiones en Durango" },
        { src: missions2, alt: "Trabajo comunitario" },
        { src: missions3, alt: "Trabajo comunitario" },
        { src: missions4, alt: "Trabajo comunitario" },
        { src: missions5, alt: "Trabajo comunitario" },
        { src: missions6, alt: "Trabajo comunitario" },
      ],
      description:
        "I had the opportunity to participate in Catholic missions, traveling to Durango, Mexico, to support a community in need. During my time there, I helped with various activities, shared moments of faith, and connected with incredible people. It was a truly eye-opening experience that allowed me to learn more about their culture, daily challenges, and the strength of their community.",
      icon: "⛪️",
    },
  ];

  const currentInterest = personalInterests.find(
    (interest) => interest.id === activeTab
  );

  return (
    <>
      <Nav />
      <Background />
      <div className={styles.personalContainer}>
        <h1 className={styles.personalTitle}>Personal</h1>

        <div className={styles.interestsContainer}>
          <div className={styles.tabsContainer}>
            {personalInterests.map((interest) => (
              <button
                key={interest.id}
                className={`${styles.tabButton} ${
                  activeTab === interest.id ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab(interest.id)}
              >
                <span className={styles.tabIcon}>{interest.icon}</span>
                <span className={styles.tabText}>{interest.title}</span>
              </button>
            ))}
          </div>

          <div className={styles.contentContainer}>
            <div className={styles.imageContainer}>
              <Carousel interval={null} className={styles.carousel}>
                {currentInterest.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={styles.interestImage}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <div className={styles.textContainer}>
              <h2>{currentInterest.title}</h2>
              <p>{currentInterest.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Personal;
