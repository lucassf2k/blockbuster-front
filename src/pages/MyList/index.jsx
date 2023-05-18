import { SideBar } from "../../components/SideBar";
import { Item } from "../../components/Item";
import { Wrapper } from "../../components/Wrapper";

import { ASSETS } from "../../assets";

import "./styles.css";
import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Link } from "react-router-dom";

export function MyList() {
  const [movie, setMovie] = useState([]);
  const [serie, setSerie] = useState([]);

  async function loadList() {
    const userEmail = localStorage.getItem("@BLOCKBUSTER:email");
    try {
      const userData = await api.get(`user/email/${userEmail}`);
      setMovie(userData.data.lista.movie);
      setSerie(userData.data.lista.serie);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadList();
  }, []);

  return (
    <Wrapper>
      <SideBar />

      <section className="collection-details">
        <h2>Minha Lista</h2>
        <div className="collection-items">
          {movie.map((item) => (
            <Link to="/player" key={item.title}>
              <Item
                name={item.title}
                ageGroup={item.advisoryRating}
                duration={item.duration}
                season={item.season}
                amountEpsodes={item.amountEpsodes}
                imageURL={item.imageUrl}
                rating={10}
                releaseYear={item.releaseDate}
                isSerie={item.season ? true : false}
              />
            </Link>
          ))}
          {serie.map((item) => (
            <Link to="/player" key={item.title}>
              <Item
                name={item.title}
                ageGroup={item.advisoryRating}
                duration={item.duration}
                season={"?"}
                amountEpsodes={item.amountEpsodes}
                imageURL={item.imageUrl}
                rating={10}
                releaseYear={item.releaseDate}
                isSerie={item.duration ? false : true}
              />
            </Link>
          ))}
        </div>
      </section>
    </Wrapper>
  );
}
