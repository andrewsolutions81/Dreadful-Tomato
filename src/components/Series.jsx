import React from 'react';
import SingleSerie from './SingleSerie';

export default function Series({seriesList}) {
  return (
    seriesList.map((serie) => {
        return(
          <SingleSerie serie={serie}  key={serie.title}/>
    )
  })
  )
}
