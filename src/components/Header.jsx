import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Header( {setTab , search, setSearch}  ) {

  const [btnStyle, setBtnStyle] = useState({
    movies:'red',
    series:'black'
  })

  const handleTab = (tab) => {
    setTab(tab);
    if(tab === "movies"){
      setBtnStyle({
        movies:'red',
        series:'black'
      })
    } else {
      setBtnStyle({
        movies:'black',
        series:'red'
    })
  }}


  return (
    <div className='header'>
      <div className='header-main'>
        <h2 className='header-title'>Dreadful tomatoes</h2>
          <div className='header-buttons'>
            <button type='button' className={`header-button movies-btn ${btnStyle.movies}`} onClick={() => handleTab('movies')} >movies</button>
            <button type='button' className={`header-button movies-btn ${btnStyle.series}`} onClick={() => handleTab('series')} >series</button>
          </div>
          <div className='header__additional--links'></div>
          <Link to='/main' className='header-filters'>filters</Link>
          <div className='header-login'>login</div>
          <div className='header-trial'>start your free trial</div>
      </div>
      <div className='header-inputs'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="prompt"
          type="text"
          placeholder="Name"
        />
      </div>
    </div>
  )
}
