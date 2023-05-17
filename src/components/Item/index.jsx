import "./styles.css";
import { ASSETS } from "../../assets";

import { converAdvisoryRatingForPortuguese } from "../../services/convetAdvisoryRating";

export function Item(props) {
  const ageGroupOptions = converAdvisoryRatingForPortuguese(props.ageGroup);
  return (
    <button className="item" onClick={props.onFunction}>
      <img src={props.imageURL} alt={props.title} />
      <div className="collection-content">
        <span
          className="age-group"
          style={{ background: ageGroupOptions.color }}
        >
          {ageGroupOptions.valueInPortuguese}
        </span>
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
    </button>
  );
}
