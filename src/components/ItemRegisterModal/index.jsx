import { useState } from 'react'

import './styles.css'

import { Input } from '../Input'
import { Button } from '../Button'

export function ItemRegisterModal({ isOpen = true }) {
  if (!isOpen) {
    return null
  }

  const [isMovie, setIsMovie] = useState(false)
  const [name, setName] = useState('')
  const [releaseYaer, setReleaseYear] = useState('')
  const [parentalRating, setParentalRating] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [videoUrl, setVideoUrl] = useState('')

  const [season, setSeason] = useState('')
  const [numberOfEpsodes, setNumberOfEpsodes] = useState(0)
  const [duration, setDuration] = useState(0)

  function handleChoiceBetweenMovieAndSerie(typeItem) {
    const typeItemIsMovie = typeItem === 'serie' ? true : false
    setIsMovie(typeItemIsMovie)
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(name)
  }

  return (
    <div className="containerItemRegisterModal">
      <div className="contentItemRegisterModal">
        <header>
          <button type="button">x</button>
          <h2>Novo item</h2>
        </header>

        <p>Tipo</p>
        <div className="choice">
          <button
            style={isMovie ? null : { background: 'var(--primary)', color: 'var(--gray1)' }}
            type="button"
            onClick={() => handleChoiceBetweenMovieAndSerie('movie')}
          >
            Filme
          </button>
          <button
            style={isMovie ? { background: 'var(--primary)', color: 'var(--gray1)' } : null}
            type="button"
            onClick={() => handleChoiceBetweenMovieAndSerie('serie')}
          >
            Série
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <Input
            label="Nome"
            id="name"
            placeholder="Avatar: A lenda de Aang"
            onChange={(event) => setName(event.target.value)}
          />
          <Input
            label="Ano de Lançamento"
            id="releaseYear"
            placeholder="2005"
            onChange={(event) => setReleaseYear(event.target.value)}
          />
          <Input
            label="Classificação Indicativa"
            id="parentalRating"
            placeholder="Livre"
          />
          {isMovie ? (
            <>
              <Input
                label="Temporada"
                id="season"
                placeholder="1"
              />
              <Input
                label="Quantidade de Episódios"
                id="numberEpsodes"
                placeholder="10"
              />
            </>
          ) : (
            <>
              <Input
                label="Duração"
                id="duration"
                placeholder="2h56m"
              />
            </>
          )}

          <Input
            label="Video Url"
            id="videoUrl"
            placeholder="https:/"
          />
          <Input
            label="Capa Url"
            id="imageUrl"
            placeholder="https:/"
          />
          <Button title="Confirmar" />
        </form>
      </div>
    </div>
  )
}
