import React from 'react'
import SingleMovie from './SingleMovie'
import './Movies.styles.css'
import { moviesList } from '../utils/data'
const movies = moviesList

function Movies({movieList}) {
  return (
    movies.map((movieList) => {
      return(
        <SingleMovie movieList={movieList} />
      )
    })
  )
}

export default Movies
