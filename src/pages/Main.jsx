import React, {useState} from 'react';
import Header from '../components/Header'
import Movies from '../components/Movies'
import Shows from '../components/Shows'

export default function Main() {
  const [tab, setTab] = useState("movies")

  tab === "movies"? <Movies /> : <Shows />

  return (
    <div>Main
      <Header changeTab={setTab} tab={tab}/>
      <div>{tab}</div>
    </div>
  )
}
