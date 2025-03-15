import Nav from "../../components/Navegation/Nav";
import Background from "../../components/Background/Background";
import Margin from "../../components/Margin/Margin";
import styles from "./Personal.module.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

// Importa las imágenes
import runningImg from "../../images/running.jpeg";
import runningImg2 from "../../images/running.jpeg";
import runningImg3 from "../../images/running.jpeg";
import tennisImg from "../../images/tennis.jpeg";
import tennisImg2 from "../../images/tennis.jpeg";
import youthGroupImg from "../../images/youth_group.jpeg";
import youthGroupImg2 from "../../images/youth_group.jpeg";
import travelImg from "../../images/travel.jpeg";
import travelImg2 from "../../images/travel.jpeg";
import salsaImg from "../../images/salsa.jpeg";
import salsaImg2 from "../../images/salsa.jpeg";
import friendsImg from "../../images/friends.jpeg";
import friendsImg2 from "../../images/friends.jpeg";

function Personal() {
  const [activeTab, setActiveTab] = useState("running");

  const personalInterests = [
    {
      id: "running",
      title: "Running",
      images: [
        { src: runningImg, alt: "Running en parque" },
        { src: runningImg2, alt: "Carrera 5K" },
        { src: runningImg3, alt: "Entrenamiento" },
      ],
      description:
        "Running helps me clear my mind and keep fit. I participate in 5K and 10K races regularly, and my goal is to complete a half marathon this year.",
      icon: "🏃‍♀️",
    },
    {
      id: "tennis",
      title: "Tennis",
      images: [
        { src: tennisImg, alt: "Jugando tenis" },
        { src: tennisImg2, alt: "Entrenamiento de tenis" },
      ],
      description:
        "Tennis is my favorite sport. I play since I was 12 years old and enjoy both individual and doubles matches with friends on weekends.",
      icon: "🎾",
    },
    {
      id: "youth",
      title: "Youth Group",
      images: [
        { src: youthGroupImg, alt: "Actividad grupal" },
        { src: youthGroupImg2, alt: "Voluntariado" },
      ],
      description:
        "I am part of a youth group where we organize community activities, volunteer work and social events. It is a great way to contribute to society and make friends.",
      icon: "👥",
    },
    {
      id: "travel",
      title: "Travel",
      images: [
        { src: travelImg, alt: "Viaje a la playa" },
        { src: travelImg2, alt: "Explorando la ciudad" },
      ],
      description:
        "I really like to travel because I get to know new cultures, try different foods and live unique experiences in each place.",
      icon: "✈️",
    },
    {
      id: "salsa",
      title: "Salsa",
      images: [
        { src: salsaImg, alt: "Bailando salsa" },
        { src: salsaImg2, alt: "Clase de baile" },
      ],
      description:
        "Salsa is my favorite dance style. Ive had different presentations in auditoriums and I love it.",
      icon: "💃",
    },
    {
      id: "friends",
      title: "Friends",
      images: [
        { src: friendsImg, alt: "Reunión con amigos" },
        { src: friendsImg2, alt: "Salida grupal" },
      ],
      description:
        "Spending time with friends is essential for me. I like to get together with my friends, make plans with them and create unforgettable memories..",
      icon: "🤝",
    },
    {
      id: "missions",
      title: "Missions",
      images: [
        { src: friendsImg, alt: "Reunión con amigos" },
        { src: friendsImg2, alt: "Salida grupal" },
      ],
      description:
        "I had the opportunity to participate in missions, I went to Durango, Mexico to help a community in need. I learned a lot about the culture and the people.",
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
      <Margin />
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
