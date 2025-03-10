import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import styles from "./Cards.module.css";

function ProjectCard({ title, description, image, id }) {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`/project/${id}`);
  };

  return (
    <Card className={`${styles.cardContainer} bg-dark text-white`}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="light" onClick={handleLearnMore}>
          Learn More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
