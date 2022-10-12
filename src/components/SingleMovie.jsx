import React from 'react'



export default function SingleMovie({movie}) {

  return (
    <div>
      <li className='single-container' >
        <h1 className='single-title'>{movie.title}</h1>
        <p className='single-description'>{movie.description}</p>
        <img className="single-image" src={movie.images['Poster Art'].url} alt="Cool Poster"></img>
      </li>
    </div>
  )
}
