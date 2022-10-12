import React from 'react'
import SingleMovie from './SingleMovie'
import './Movies.styles.css'


function Movies({moviesList}) {

  return (
    moviesList.map((movie) => {
      return(
        <SingleMovie movie={movie}  key={movie.title}/>
      )
    })
  )
}

export default Movies
