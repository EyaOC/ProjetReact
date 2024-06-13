import { useState } from "react";
import arrow from "../../images/Vector.png";
import "./Collapse.css";
import PropTypes from "prop-types";

export default function CollapseComponent({ title, content }) {
  /*useState pour gérer l'état d'ouverture et de fermeture du composant*/ 
  /*isOpen détermine si le contenu est visible ou non*/ 
  const [isOpen, setIsOpen] = useState(false);
/*openContent est une fonction qui inverse la valeur de isOpen*/ 
  const openContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${isOpen ? "collapse collapse_open" : "collapse collapse_close"}`}>
      <div className="collapse_div">
        <h3 className="collapse_title">
          {title}
          <img
            className={`collapse_arrow ${isOpen ? "collapse_ouverture" : "collapse_fermeture"}`}
            onClick={openContent}
            src={arrow}
            alt="Voir le contenu"
          />
        </h3>
        <div className={`${isOpen ? "collapse_txt--visible" : "collapse_txt--hidden"}`}>
         <p>{content}</p> 
        </div>
      </div>
    </div>
  );
}
CollapseComponent.propTypes = {
  title: PropTypes.string.isRequired, // Spécifiez que 'title' doit être une chaîne de caractères et qu'il est obligatoire
  content: PropTypes.string.isRequired,
};