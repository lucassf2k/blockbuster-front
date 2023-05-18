import { useContext } from "react";
import { Link } from "react-router-dom";

import { ASSETS } from "../../assets";

import "./styles.css";

import { Context } from "../../Context/AuthContext";

export function SideBar() {
  const { isAdmin, handleLogout } = useContext(Context);

  return (
    <aside className="nav">
      <Link to="/">
        <img src={ASSETS.logoIcon} alt="Logomarca escrito Block Buster" />
      </Link>
      <nav>
        {isAdmin ? (
          <>
            <Link to="/home">
              <img src={ASSETS.homeIcon} alt="Ícone com uma casa" />
              <p>Início</p>
            </Link>
            <Link to="/admin/dashboard">
              <img src={ASSETS.myListIcon} alt="Ícone com uma casa" />
              <p>Acervo</p>
            </Link>
          </>
        ) : (
          <>
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
          </>
        )}
      </nav>

      <footer>
        <Link to="/account">
          <img src={ASSETS.accountIcon} alt="Ícone com uma casa" />
          <p>Minha conta</p>
        </Link>
        <button type="button" onClick={handleLogout}>
          <img src={ASSETS.exitIcon} alt="Ícone com uma casa" />
          <p>Sair</p>
        </button>
      </footer>
    </aside>
  );
}
