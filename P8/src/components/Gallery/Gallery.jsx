import Card from "./Components/Card"
import "./Gallery.css";
import datas from "../../src/logements.json";

export default function Gallery() {
    return (
        <main className="gallery">
       {/* Boucle sur le tableau de données pour créer une carte pour chaque élément */}
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    )
}