import "./card.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function Card({ id, title, cover }) {
  return (
    <div className="card">
      <Link to={`/logement/${id}`} className="card_link">
        <img className="card_img" src={cover} alt={title} />
        <div className="card_overlay">
          <h2 className="card_title">{title}</h2>
        </div>
      </Link>
    </div>
  );
}

// Spécifiez les propTypes pour votre composant
Card.propTypes = {
  id: PropTypes.string.isRequired, // Spécifiez que 'id' doit être un nombre et qu'il est obligatoire
  title: PropTypes.string.isRequired, // Spécifiez que 'title' doit être une chaîne de caractères et qu'il est obligatoire
  cover: PropTypes.string.isRequired,
};
