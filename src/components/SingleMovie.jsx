import React from 'react'
import {moviesList} from '../utils/data'
import { v4 as uuidv4 } from 'uuid';

function randomId(min, max) {
  return Math.random() * (max - min) + min;
}

const movies = moviesList

export default function SingleMovie({moviesList}) {
  return (
    <div>SingleMovie
      <li className='single-container' key={randomId}>
        <h1 className='single-title'>{movies.title}</h1>
        <p className='description'>{moviesList.description}</p>
        {/* <img className="movie-image" src={moviesList.['Poster Art'].url} alt="Cool Poster"></img> */}
      </li>
    </div>
  )
}
