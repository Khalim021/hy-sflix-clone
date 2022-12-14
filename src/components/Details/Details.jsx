import React from 'react';
import './Details.css';

function Details() {
  return (
    <div className='main-detail__container'>
      <div className='main-background__image'>
        <img src='https://cdn.mos.cms.futurecdn.net/aTK8YBkBAbqCSzNGxt8adL.jpg' alt='background'/>
      </div>
      <div className='main-detail__logo'>
        <img src='/img/logo.svg' alt='logo__title'/>
      </div>
      <div className='main-detail__controler'>
        <button className='play__button'>
          <img src='/img/play-icon-black.png' alt='play'/>
          <span>PLAY</span>
        </button>
        <button className='trailer__button'>
          <img src='/img/play-icon-white.png' alt='trailer'/>
          <span>TRAILER</span>
        </button>
        <button className='add__button'>
          <span>+</span>
        </button>
        <button className='group__button'>
          <img src='/img/group-icon.png' alt='group'/>
        </button>
      </div>
      <div className='detail__title'>
        2022 - 117m - Fantasy, Family, Kids, Animation, Trailer
      </div>
      <div className='detail__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Rem, voluptas incidunt? Aliquam nesciunt ipsam, id ullam suscipit iste.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, praesentium!
      </div>
    </div>
  );
}

export default Details;