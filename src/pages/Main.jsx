import React, {useState} from 'react';
import Header from '../components/Header'
import Movies from '../components/Movies'
import Series from '../components/Series'
import { moviesList, seriesList } from '../utils/data';

export default function Main() {

  const [tab, setTab] = useState("movies")
  let pageShown = <Movies />

  tab === "movies"? pageShown = <Movies moviesList={moviesList} /> : pageShown = <Series seriesList={seriesList}/>

  return (
    <div>
      <Header changeTab={setTab} tab={tab}/>
      {pageShown}
    </div>
  )
}
