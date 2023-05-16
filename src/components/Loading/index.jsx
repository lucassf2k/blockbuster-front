import { ASSETS } from "../../assets";

import "./styles.css";

export function Loading() {
  return (
    <div className="containerLoader">
      <img
        src={ASSETS.loadingIcon}
        alt="Ícone de carregamento"
        className="loader"
      />
    </div>
  );
}
