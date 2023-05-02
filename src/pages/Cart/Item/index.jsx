import PropTypes from 'prop-types';

import { currecyFormat } from '../../../services/currencyFormat';

export function Item(props) {
  return (
    <>
      <div className="item">
        <img src={props.imageURL} alt="House of the dragon" />
        <div className="item-details">
          <strong>{props.type.toUpperCase()}</strong>
          <p>{props.name}</p>
        </div>
        <div className="item-price">
          {props.isRent ? (
            <>
              <fieldset>
                <label htmlFor="amountOfRent">
                  Quantidade <br />
                  <span>de dias</span>
                </label>
                <input
                  type="number"
                  min="1"
                  id="amountOfRent"
                  placeholder="0"
                />
              </fieldset>
              <p>
                {currecyFormat('pt-BR', 'BRL', props.price)}
              </p>
            </>
          ) : (
            <p>
              {currecyFormat('pt-BR', 'BRL', props.price)}
            </p>
          )}
        </div>
      </div>
      <div className="separador"></div>
    </>
  );
}

Item.propTypes = {
  imageURL: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['compra', 'aluguel']).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  isRent: PropTypes.bool,
};
