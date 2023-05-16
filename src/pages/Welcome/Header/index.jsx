import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ASSETS } from "../../../assets";
import "./styles.css";

import { Context } from "../../../Context/AuthContext";

export function Header() {
  const { authenticated } = useContext(Context);
  const navigate = useNavigate();

  const handleSigninOrToSingin = (event) => {
    event.preventDefault();

    if (authenticated) {
      navigate("/home");
    } else {
      navigate("/signin");
    }
  };

  return (
    <header className="header_welcome">
      <h2>
        <img src={ASSETS.logoIcon} alt="Logo escriot Block Buster" />
      </h2>
      <div className="header_login--actions">
        <button
          ttype="button"
          className="button_secundary"
          onClick={handleSigninOrToSingin}
        >
          Entrar
        </button>
        <Link to="/signup" className="button_primary">
          Criar conta
        </Link>
      </div>
    </header>
  );
}
