import { useState } from "react";

import { Input } from "../../Input";
import { Button } from "../../Button";

import "./styles.css";

import { api } from "../../../services/api";

const OPTIONS_SELECT_INPUT_GENDER = [
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

export function DeleteOrUpdateItemModal({ isOpen, itemId, onClose }) {
  if (!isOpen) {
    return <></>;
  }

  const [isMovie, setIsMovie] = useState(false);
  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [gender, setGender] = useState("");
  const [advisoryRating, setAdvisoryRating] = useState("");
  const [price, setPrice] = useState("");

  const [seasonNumber, setSeasonNumber] = useState("");
  const [numberOfEpsodes, setNumberOfEpsodes] = useState(0);
  const [episodeNumber, setEpisodeNumber] = useState("");
  const [duration, setDuration] = useState("");

  const [file, setFile] = useState(null);

  function handleChoiceBetweenMovieAndSerie(typeItem) {
    const typeItemIsMovie = typeItem === "serie" ? true : false;
    setIsMovie(typeItemIsMovie);
  }

  function handleDeleteItem(id) {
    return async () => {
      await api.delete(`/movies/${id}`);
      alert("Removido com sucesso!");
      onClose();
      window.location.reload();
    };
  }

  return (
    <div className="containerDeleteOrUpdateModal">
      <div className="contentDeleteOrUpdateModal">
        <header>
          <button type="button" onClick={onClose()}>
            x
          </button>
          <h2>Remova ou Atualize</h2>
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

        <form>
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
            <select
              value={advisoryRating}
              onChange={(event) => setAdvisoryRating(event.target.value)}
            >
              {OPTIONS_SELECT_ADVISORY_RATING.map((option) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="inputSelect">
            <label htmlFor="gender">Gênero</label>
            <select
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              {OPTIONS_SELECT_INPUT_GENDER.map((option) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
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
          <Input
            label="Preço"
            id="price"
            placeholder="145.5"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
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

          <div className="actions">
            <Button title="Atualizar" />
            <Button
              title="Remover"
              type="button"
              onClick={handleDeleteItem(itemId)}
              style={{ background: "red" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
