import React from 'react';
import { useNavigate } from 'react-router-dom';


const movie = {
  title: "Mad Max: Fury Road",
  poster: "https://streamcoimg-a.akamaihd.net/000/958/725/958725-PosterArt-96c5bbb6e15269f5b5cd9bc7801de1d9.jpg",
}

const serie = {
  title: "Younger",
  poster:"https://streamcoimg-a.akamaihd.net/000/143/24/14324-PosterArt-a0168953a3b93681dbd60c7bcc50a0af.jpg"
}

export default function Landing({changeTab , tab, setTab, search, setSearch} ) {
  const navigate = useNavigate();

  const handleNavigateMovies = () => {
      setTab = "movies"
      navigate('/main' );
  }

  const handleNavigateSeries = () => {
    setTab("series")
    navigate('/main',setTab = "series");
}
  return (
    <div className='landing'>
      <div className='header'>
      <div className='header-main'>
        <h2 className='header-title'>Dreadful tomatoes</h2>
          <div className='header__additional--links'></div>
          <div className='header-filters'>filters</div>
          <div className='header-login'>login</div>
          <div className='header-trial'>start your free trial</div>
      </div>
    </div>
    <div   className='landing__container'>
      <div className='landing__movies' onClick={handleNavigateMovies} >
        <div className='shade'>
            <h2 className='landing__title'>{movie.title}</h2>
        </div>
          <img className='landing__poster' src={movie.poster} alt="movie-poster" />
      </div>
      <div className='landing__series' onClick={handleNavigateSeries}>
          <div className='shade'>
            <h2 className='landing__title'>{serie.title}</h2>
          </div>
          <img className='landing__poster' src={serie.poster} alt="serie-poster" />
      </div>
    </div>
    </div>
  )
  /* return (
    <div className='landing'>
      <div className='header'>
      <div className='header-main'>
        <h2 className='header-title'>Dreadful tomatoes</h2>
          <div className='header__additional--links'></div>
          <div className='header-filters'>filters</div>
          <div className='header-login'>login</div>
          <div className='header-trial'>start your free trial</div>
      </div>
    </div>
    <div  onClick={handleNavigate} className='landing__container'>
      <div className='landing__movies'>
        <div className='shade'>
            <h2 className='landing__title'>{movie.title}</h2>
        </div>
          <img className='landing__poster' src={movie.poster} alt="movie-poster" />
      </div>
      <div className='landing__series'>
          <div className='shade'>
            <h2 className='landing__title'>{serie.title}</h2>
          </div>
          <img className='landing__poster' src={serie.poster} alt="serie-poster" />
      </div>
    </div>
    </div>
  ) */
}
