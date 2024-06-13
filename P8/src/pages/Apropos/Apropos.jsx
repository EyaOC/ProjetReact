import "./apropos.css";
import CollapseComponent from "../../components/Collapse/Collapse.jsx";
import Banner from "../../components/Banner/Banner";
import Image from "../../images/_Section 1.png";

export default function Apropos() {
  const textes = [
    { title: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." },
    { title: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
    { title: "MON Service", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
    { title: "Sécurité", content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}
  ];

  return (
    <>
      <Banner texte="" image={Image} />
      <div className="apropos1">
        <div className="parent-container">
          {textes.map((texte, index) => (
            <div key={index} className="apropos-collapse">
              <CollapseComponent title={texte.title} content={texte.content} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
