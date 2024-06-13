import PropTypes from "prop-types";


export default function Banner({ texte, image }) {
  return (
    <div className="banner_home">
      <div className="img_container">
        <img src={image} alt="Banner" className="banner_image" />
        <p className="text_banner_home">{texte}</p>
      </div>
    </div>
  );
}
Banner.propTypes = {
  texte: PropTypes.string.isRequired, // Spécifiez que 'title' doit être une chaîne de caractères et qu'il est obligatoire
  image: PropTypes.string.isRequired,
};
