import "./styles.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { SideBar } from "../../components/SideBar";
import { Wrapper } from "../../components/Wrapper";
import { Item } from "../../components/Item";

import { ASSETS } from "../../assets";

import { api } from "../../services/api";

export function Home() {
  const [movie, setMovie] = useState([]);
  const [serie, setSerie] = useState([]);

  async function loadMovie() {
    try {
      const responseMovie = await api.get("movies");
      const responseSerie = await api.get("series");
      setMovie(responseMovie.data);
      setSerie(responseSerie.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function insertToList(item, isSerie) {
    const userEmail = localStorage.getItem("@BLOCKBUSTER:email");
    const movieTitle = [item.title];

    try {
      if (isSerie) {
        await api.patch("user/my_list/series", {
          email: userEmail,
          serieTitle: movieTitle,
        });
        alert('Adiciona no "Minha Lista" com sucesso');
      } else {
        await api.patch("user/my_list/movies", {
          email: userEmail,
          movieTitle,
        });
        alert('Adiciona no "Minha Lista" com sucesso');
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadMovie();
  }, []);

  return (
    <Wrapper>
      <SideBar />
      <section className="discover">
        <div className="search">
          <div className="nav-bar">
            <div className="nav-links">
              <a href="">Filmes</a>
              <a href="">Séries</a>
              <a href="">Animes</a>
            </div>
            <div className="search-bar">
              <input type="text" placeholder="Pesquisar" />
            </div>
          </div>
        </div>

        <div className="genders">
          <section className="collection-details">
            <h3 className="gray2">Nosso Acervo</h3>
            <div className="collection-items">
              {movie.map((item) => (
                <Item
                  key={item.title}
                  name={item.title}
                  ageGroup={item.advisoryRating}
                  duration={item.duration}
                  season={item.season}
                  amountEpsodes={item.amountEpsodes}
                  imageURL={item.imageUrl}
                  rating={10}
                  releaseYear={item.releaseDate}
                  isSerie={false}
                  onFunction={() => insertToList(item, false)}
                />
              ))}
              {serie.map((item) => (
                <Item
                  key={item.title}
                  name={item.title}
                  ageGroup={item.advisoryRating}
                  duration={item.duration}
                  season={item.season}
                  amountEpsodes={item.amountEpsodes}
                  imageURL={item.imageUrl}
                  rating={10}
                  releaseYear={item.releaseDate}
                  isSerie={true}
                  onFunction={() => insertToList(item, true)}
                />
              ))}
            </div>
          </section>
        </div>
      </section>
    </Wrapper>
  );
}
