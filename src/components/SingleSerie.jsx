import React from 'react'

export default function SingleSerie({serie}) {
  const poster = serie.images['Poster Art'].url
  return (
    <div className='card__container'>
        <li className='card__item' >
          <div className='card__info'>
            <img className="card__image" src={poster?poster:<div>Loading...</div>} alt="Cool Poster"></img>
            <h1 className='card__title'>{serie.title}</h1>
            <p className='card__description'>{serie.description}</p>
          </div>
        </li>
    </div>
  )
}
