import { useState } from "react";

import "./styles.css";

import { Input } from "../../Input";
import { Button } from "../../Button";

import { api } from "../../../services/api";

const OPTIONS_SELECT_INPUT = [
  {
    value: 0,
    label: "Ação",
  },
  {
    value: 1,
    label: "Comédia",
  },
  {
    value: 2,
    label: "Drama",
  },
  {
    value: 3,
    label: "Fantasia",
  },
  {
    value: 4,
    label: "Terror",
  },
  {
    value: 5,
    label: "Mistério",
  },
  {
    value: 6,
    label: "Romance",
  },
  {
    value: 7,
    label: "Suspense",
  },
  {
    value: 8,
    label: "Faroest",
  },
  {
    value: 0,
    label: "Ficção Científica",
  },
];

const OPTIONS_SELECT_ADVISORY_RATING = [
  {
    value: 0,
    label: "Livre",
  },
  {
    value: 1,
    label: "Maiores de 10 anos",
  },
  {
    value: 2,
    label: "Maiores de 12 anos",
  },
  {
    value: 3,
    label: "Maiores de 14 anos",
  },
  {
    value: 4,
    label: "Maiores de 16 anos",
  },
  {
    value: 5,
    label: "Maiores de 20 anos",
  },
];

export function ItemRegisterModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  const [isMovie, setIsMovie] = useState(false);
  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [gender, setGender] = useState("");
  const [advisoryRating, setAdvisoryRating] = useState("");

  const [seasonNumber, setSeasonNumber] = useState("");
  const [numberOfEpsodes, setNumberOfEpsodes] = useState(0);
  const [episodeNumber, setEpisodeNumber] = useState("");
  const [duration, setDuration] = useState(0);

  const [file, setFile] = useState(null);

  function handleChoiceBetweenMovieAndSerie(typeItem) {
    const typeItemIsMovie = typeItem === "serie" ? true : false;
    setIsMovie(typeItemIsMovie);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="containerItemRegisterModal">
      <div className="contentItemRegisterModal">
        <header>
          <button type="button" onClick={onClose}>
            x
          </button>
          <h2>Novo item</h2>
        </header>

        <p>Tipo</p>
        <div className="choice">
          <button
            style={
              isMovie
                ? null
                : { background: "var(--primary)", color: "var(--gray1)" }
            }
            type="button"
            onClick={() => handleChoiceBetweenMovieAndSerie("movie")}
          >
            Filme
          </button>
          <button
            style={
              isMovie
                ? { background: "var(--primary)", color: "var(--gray1)" }
                : null
            }
            type="button"
            onClick={() => handleChoiceBetweenMovieAndSerie("serie")}
          >
            Série
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="uploadImage">
            <input
              type="file"
              id="customInputFile"
              onChange={(event) => setFile(event.target.files[0])}
            />
          </div>
          <Input
            label="Título"
            id="title"
            placeholder="Avatar: A lenda de Aang"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <Input
            label="Ano de Lançamento"
            id="relaseDate"
            placeholder="dd/mm/yyyy"
            value={releaseDate}
            onChange={(event) => setReleaseDate(event.target.value)}
          />
          <div className="inputSelect">
            <label htmlFor="advisoryRating">Classificação indicativa</label>
            <select>
              {OPTIONS_SELECT_ADVISORY_RATING.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div className="inputSelect">
            <label htmlFor="gender">Gênero</label>
            <select>
              {OPTIONS_SELECT_INPUT.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <Input
            label="Duração"
            id="duration"
            placeholder="em minutos..."
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
          />
          {isMovie && (
            <>
              <Input
                label="Temporada"
                id="seasonEpisode"
                placeholder="1"
                value={seasonNumber}
                onChange={(event) => setSeasonNumber(event.target.value)}
              />
              <Input
                label="Quantidade de epsódios"
                id="numberEpsodes"
                placeholder="10"
                value={numberOfEpsodes}
                onChange={(event) => setNumberOfEpsodes(event.target.value)}
              />
            </>
          )}
          <Button title="Confirmar" />
        </form>
      </div>
    </div>
  );
}
