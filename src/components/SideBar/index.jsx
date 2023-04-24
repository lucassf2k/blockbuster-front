import { Link } from 'react-router-dom';

import { ASSETS } from '../../assets';

import './styles.css';

export function SideBar() {
  return (
    <aside className="nav">
      <Link to="/">
        <img src={ASSETS.logoIcon} alt="Logomarca escrito Block Buster" />
      </Link>
      <nav>
        <Link to="/home">
          <img src={ASSETS.homeIcon} alt="Ícone com uma casa" />
            <p>Início</p>
        </Link>
        <Link to="/cart">
          <img src={ASSETS.cartIcon} alt="Ícone com uma casa" />
            <p>Carrinho</p>
        </Link>
        <Link to="/mylist">
          <img src={ASSETS.myListIcon} alt="Ícone com uma casa" />
            <p>Minha lista</p>
        </Link>
        <Link to="/favorites">
          <img src={ASSETS.favoriteIcon} alt="Ícone com uma casa" />
            <p>Favoritos</p>
        </Link>
      </nav>

      <footer>
        <Link to="/account">
          <img src={ASSETS.accountIcon} alt="Ícone com uma casa" />
            <p>Minha conta</p>
        </Link>
        <Link to="/">
          <img src={ASSETS.exitIcon} alt="Ícone com uma casa" />
            <p>Sair</p>
        </Link>
      </footer>
    </aside>
  );
}
