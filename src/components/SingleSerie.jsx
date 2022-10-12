import React from 'react'

export default function SingleSerie({serie}) {
  const poster = serie.images['Poster Art'].url
  return (
    <ul>
      <li className='single-container' >
        <h1 className='single-title'>{serie.title}</h1>
        <p className='single-description'>{serie.description}</p>
        <img className="single-image" src={poster?poster:<div>Loading...</div>} alt="Cool Poster"></img>
      </li>
    </ul>
  )
}
