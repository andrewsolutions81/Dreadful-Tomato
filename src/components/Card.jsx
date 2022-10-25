import React from 'react'

export default function Card({item}) {
  const poster = item.images['Poster Art'].url
  return (
    <div className='card__container'>
      <li className='card__item'>
        <div className='card__info'>
          <img className="card__image" src={poster?poster:<div>Loading...</div>} alt="Cool Poster"></img>
          <h1 className='card__title'>{item.title}</h1>
          <p className='card__description'>{item.description}</p>
        </div>
      </li>
    </div>
  )
}
