import { ASSETS } from "../../assets";

import { Link } from "react-router-dom";

import "./styles.css";

export function Player(){
    return(
        <div>
            <header>
                <Link to="/mylist">
                    <img src={ASSETS.closeIcon} alt="" />
                </Link>
            </header>
            <footer>
                <img src={ASSETS.playerBar} alt="" />
            </footer>
        </div>
    );
}