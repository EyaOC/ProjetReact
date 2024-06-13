import "./accueil.css";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";
import Image from "../../images/BannerImage.png";

export default function Accueil() {
  /*le hook useState pour gérer l'état local de notre composant*/
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
/* récupérer les données des propriétés depuis l'API*/ 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/properties");
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
        setIsLoading(false); // Mettre à jour l'état pour indiquer que les données sont chargées
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Chargement en cours...</p>;
  }

  return (
     /* passer le texte et l'image en tant que props.*/ 
     
    <>
  
      <Banner texte="Chez vous, partout et ailleurs" image={Image} />
      <div className="accueil1">
        <div className="cards">
          {data.map((property) => (
            /* parcourir les données des propriétés et générer un composant Card pour chaque propriété */
            <Card
              key={property.id}
              id={property.id}
              cover={property.cover}
              title={property.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}
