import PropTypes from "prop-types";

import { ASSETS } from "../../assets";

export function Item(props) {
  return (
    <div className="item">
      <img src={props.imageURL} alt={props.title} />
      <div className="collection-content">
        <span className="age-group">{props.ageGroup}</span>
        <h5>{props.name}</h5>
        <div className="item-details">
          <p>{props.releaseYear}</p>
          <div className="separator-circle"></div>
          {props.isSerie ? <p>{props.season} Temp</p> : <p>{props.duration}</p>}
          <div className="separator-circle"></div>
          <p>
            <img src={ASSETS.imgbLogoImg} alt="Imdb logomarca" />
            {props.rating}/10
          </p>
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  imageURL: PropTypes.string.isRequired,
  ageGroup: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  releaseYear: PropTypes.string.isRequired,
  duration: PropTypes.string,
  rating: PropTypes.string.isRequired,
  season: PropTypes.string,
  amountEpsodes: PropTypes.number,
  isSerie: PropTypes.bool,
};
