import React, {useState} from 'react';
import Header from '../components/Header'
import Movies from '../components/Movies'
import Shows from '../components/Shows'
import { moviesList,seriesList } from '../utils/data';

export default function Main({ moviesList,seriesList }) {
  const [tab, setTab] = useState("movies")
  let pageShown = <Movies />

  tab === "movies"? pageShown = <Movies moviesList={moviesList} /> : pageShown = <Shows seriesList={seriesList}/>

  return (
    <div>
      <Header changeTab={setTab} tab={tab}/>
      {pageShown}
    </div>
  )
}
