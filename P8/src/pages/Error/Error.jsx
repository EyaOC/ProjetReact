import "./error.css";

export default function Error() {
    return (
      <div className="error">
        <div className="error_container">
          <h1 className="error_404"> 404 </h1>
          <div className="error_oups">
            Oups! La page que vous demandez n'existe pas.
          </div>
        </div>
          <a href="/" className="error_return">Retourner à la page d'accueil</a>
      </div>
    );
  } 
