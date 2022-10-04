import React, {useState} from 'react';
import './Header.styles.css'

export default function Header( {changeTab , tab}  ) {
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");
  const [btnStyle, setBtnStyle] = useState({
    movies:'red',
    series:'black'
  })

  const handleTab = (selectedTab) => {
    changeTab(selectedTab);
    if(selectedTab === "movies"){
      setBtnStyle({
        movies:'red',
        series:'black'
      })
    }else {
      setBtnStyle({
        movies:'black',
        series:'red'
    })
  }}


  return (
    <div className='header'>
      <div className='header-main'>
        <h1 className='header-title'>Dreadful tomatoes</h1>
          <div className='header-buttons'>
            <button type='button' className={`header-button movies-btn ${btnStyle.movies}`} onClick={() => handleTab('movies')} >movies</button>
            <button type='button' className={`header-button movies-btn ${btnStyle.series}`} onClick={() => handleTab('series')} >series</button>
          </div>
          <div className='header-filters'>filters</div>
          <div className='header-login'>login</div>
          <div className='header-trial'>start your free trial</div>
      </div>
      <div className='header-inputs'>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
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
