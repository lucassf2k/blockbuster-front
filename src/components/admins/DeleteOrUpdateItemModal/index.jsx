import { useEffect, useState } from "react";

import { Input } from "../../Input";
import { Button } from "../../Button";

import "./styles.css";

import { api } from "../../../services/api";
import { formatDateToBrazil } from "../../../services/formatDate";

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

export function DeleteOrUpdateItemModal({ isOpen, itemId, isSerie, onClose }) {
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

  async function loadData() {
    try {
      if (isSerie) {
        const { data } = await api.get(`series/get_By_Id/${itemId}`);
        setTitle(data.title);
        setReleaseDate(formatDateToBrazil(data.releaseDate).fullDate);
        setAdvisoryRating(data.advisoryRating);
        setGender(data.gender);
        setDuration(data.seasons[0].episodes[0].duration);
        setPrice(data.price);
      } else {
        const { data } = await api.get(`movies/${itemId}`);
        setTitle(data.title);
        setReleaseDate(formatDateToBrazil(data.releaseDate).fullDate);
        setAdvisoryRating(data.advisoryRating);
        setGender(data.gender);
        setDuration(data.duration);
        setPrice(data.price);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  function handleChoiceBetweenMovieAndSerie() {
    // const typeItemIsMovie = typeItem === "serie" ? true : false;
    // setIsMovie(typeItemIsMovie);
    isSerie ? setIsMovie(true) : setIsMovie(false);
  }

  function handleDeleteItem(id) {
    return async () => {
      try {
        if (isSerie) {
          await api.delete(`series/${id}`);
          alert("Removido com sucesso!");
          onClose();
          window.location.reload();
        } else {
          await api.delete(`movies/${id}`);
          alert("Removido com sucesso!");
          onClose();
          window.location.reload();
        }
      } catch (err) {
        console.log(err);
      }
    };
  }

  async function handleUpdateItem(id) {
    const formData = new FormData();
    formData.append("file", file);

    const responseImageUrl = await api.post("images/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (!isMovie) {
      try {
        await api.put("/movies", {
          title,
          duration: Number(duration),
          releaseDate,
          gender: Number(gender),
          advisoryRating: Number(advisoryRating),
          imageUrl: responseImageUrl.data,
          uuid: id,
          price: Number(price),
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const seasons = [
          {
            seasonNumber: 0,
            episodes: [
              {
                title: "",
                duration: 0,
                episodeNumber: 0,
              },
            ],
          },
        ];
        await api.put("series", {
          title,
          releaseDate,
          gender: Number(gender),
          advisoryRating: Number(advisoryRating),
          imageUrl: responseImageUrl.data,
          seasons: seasons,
          price: Number(price),
        });
      } catch (err) {
        console.log(err);
      }
    }
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
              isMovie || isSerie
                ? null
                : { background: "var(--primary)", color: "var(--gray1)" }
            }
            type="button"
            onClick={handleChoiceBetweenMovieAndSerie}
          >
            Filme
          </button>
          <button
            style={
              isMovie || isSerie
                ? { background: "var(--primary)", color: "var(--gray1)" }
                : null
            }
            type="button"
            onClick={handleChoiceBetweenMovieAndSerie}
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
          <div className="actions">
            <Button
              title="Atualizar"
              type="button"
              onClick={() => handleUpdateItem(itemId)}
            />
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
