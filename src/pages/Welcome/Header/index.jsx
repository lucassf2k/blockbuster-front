import { Link } from 'react-router-dom';

import { ASSETS } from '../../../assets';
import './styles.css';

export function Header() {
  return (
    <header className="header_welcome">
      <h2>
        <img src={ASSETS.logoIcon} alt="Logo escriot Block Buster" />
      </h2>
      <div className="header_login--actions">
        <Link to="/login" className="button_secundary">
          Entrar
        </Link>
        <Link to="/" className="button_primary">
          Criar conta
        </Link>
      </div>
    </header>
  );
}
