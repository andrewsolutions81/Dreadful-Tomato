import React, {useState} from 'react';
import './Header.styles.css'
import Shows from './Shows';

export default function Header( {changeTab , tab}  ) {
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");



  const handleTab = (selectedTab) => {
    changeTab(selectedTab)
  }
//crear variable de estado -> es un objeto  y la variable tiene dos llaves movies y series
//si el tab seleccionado es movies la llave movies dice red clase css y llave series =""
//si es seres el movies ... se invierten
//asignarle el valor de la variable   variable.movies
  return (
    <div className='header'>
      <div className='header-main'>
        <h1 className='header-title'>Dreadful tomatoes</h1>
          <div className='header-buttons'>
            <button type='button' className={`header-button movies-btn ${red}`} onClick={() => handleTab('movies')} >movies</button>
            <button type='button' className={`header-button movies-btn ${red}`} onClick={() => handleTab('series')} >series</button>
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
