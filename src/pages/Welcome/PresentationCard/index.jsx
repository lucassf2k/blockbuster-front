import PropTypes from 'prop-types';

import './styles.css';

export function PresentationCard({ title, description, imageUrl, infos }) {
  return (
    <div className="section_main--cart">
      <img src={imageUrl} alt={title} />
      <div className="card-infos">
        <p>{infos}</p>
        <h3>{title}</h3>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}

PresentationCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  infos: PropTypes.string.isRequired,
};
