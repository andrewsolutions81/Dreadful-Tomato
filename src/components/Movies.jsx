import React from 'react'
import SingleMovie from './SingleMovie'

function Movies({moviesList}) {
  return (
    moviesList.map((movie) => {
      return(
        <ul className='every__item'>
          <SingleMovie movie={movie}  key={movie.title}/>
        </ul>
      )
    })
  )
}

export default Movies
