import React, {useState} from 'react';

export default function Header( {changeTab , tab, search, setSearch}  ) {

  const [date, setDate] = useState("");

  const [btnStyle, setBtnStyle] = useState({
    movies:'red',
    series:'black'
  })

  const handleTab = (tab) => {
    changeTab(tab);
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
          <div className='header-filters'>filters</div>
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
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="prompt"
          type="text"
          placeholder="date"
        />
      </div>
    </div>
  )
}
