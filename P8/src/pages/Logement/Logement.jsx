import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import CollapseComponent from "../../components/Collapse/Collapse";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faStar as filledStar } from '@fortawesome/free-solid-svg-icons';
//import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import "./Logement.css";
import Error from "../../pages/Error/Error";

export default function Logement() {
  const [data, setData] = useState(null); // Stocke les données du logement
  const [isLoading, setIsLoading] = useState(true); // État local indiquant si les données sont en cours de chargement
  const { id } = useParams(); // Hook useParams de React Router pour extraire l'ID du logement à partir de l'URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/properties/" + id);
        if (!response.ok) {
          throw new Error("Propriété non trouvée");
        }
        const jsonData = await response.json();
        if (!jsonData) {
          throw new Error("Propriété non trouvée");
        }
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
        setIsLoading(false);
        setData(null); // Assurez-vous que data est null en cas d'erreur
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  if (!data) {
    return <Error texte="Propriété non trouvée" Error={404} />;
  }

  const logement = data;

  const equipmentList = logement.equipments.map((equipment) => (
    <span key={equipment}>{equipment}<br /></span>
  ));

  const stars = [];
  for (let i = 0; i < logement.rating; i++) {
    //stars.push(<FontAwesomeIcon key={i} icon={filledStar} style={{ color: 'red' }} />);
    stars.push(<i key={i} className="fa-solid fa-star" style={{ color: 'red' }}></i>);  }
  for (let i = logement.rating; i < 5; i++) {
   // stars.push(<FontAwesomeIcon key={i} icon={emptyStar} style={{ color: 'red' }} />);
   stars.push(<i key={i} className="fa-regular fa-star" style={{ color: 'red' }}></i>);  }

  const [firstName, lastName] = logement.host.name.split(' ');

  const tagList = logement.tags.map((tag) => (
    <span key={tag}>{tag}</span>
  ));

  return (
    <div className="logement_main">
      <Carrousel pictures={logement.pictures} title={logement.title} />
      <div className="logement_infos">
        <div className="logement_title_tag">
          <div className="logement_main_title">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>
          <div className="logement_main_tags">
            {tagList}
          </div>
        </div>
        <div className="logement_main_host_rating">
          <div className="logement_main_host">
            <div>
              <p>{firstName}<br />{lastName}</p>
            </div>
            <img
              className="logement_main_host_img"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
          <div className="logement_host_rating">
            {stars}
          </div>
        </div>
      </div>
      <div className="logement_main_collapse">
        <div className="logement_main_collapse_details">
          <CollapseComponent title="Description" content={logement.description} />
        </div>
        <div className="logement_main_collapse_details">
          <CollapseComponent title="Équipements" content={equipmentList} />
        </div>
      </div>
    </div>
  );
}
