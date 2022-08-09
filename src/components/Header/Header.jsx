import React from 'react';
import './Header.css';

function Header() {
  return (
    <nav className='main-nav__header'>
      <img className='main-header__logo' src='/img/logo.svg' alt='logo'/>
      <div className='nav__header'>
        <a className='nav-header__items'>
          <img className='home__logo' src='/img/home-icon.svg' alt='home'/>
          <span>HOME</span>
        </a>
        <a className='nav-header__items'>
          <img className='home__logo' src='/img/search-icon.svg' alt='search'/>
          <span>SEARCH</span>
        </a>
        <a className='nav-header__items'>
          <img className='home__logo' src='/img/watchlist-icon.svg' alt='watch'/>
          <span>WATCH</span>
        </a>
        <a className='nav-header__items'>
          <img className='home__logo' src='/img/original-icon.svg' alt='originals'/>
          <span>ORIGINALS</span>
        </a>
        <a className='nav-header__items'>
          <img className='home__logo' src='/img/movie-icon.svg' alt='movies'/>
          <span>MOVIES</span>
        </a>
        <a className='nav-header__items'>
          <img className='home__logo' src='/img/series-icon.svg' alt='series'/>
          <span>SERIES</span>
        </a>
      </div>
      <img className='user__image' src='https://media-exp1.licdn.com/dms/image/C4E03AQGGNdEHmV3eVw/profile-displayphoto-shrink_200_200/0/1655530148676?e=2147483647&v=beta&t=KBW0-CLGAbi3viVYWs3qr9BZHebcq66unilC66jcxko' alt='user' />
    </nav>
  );
}

export default Header;