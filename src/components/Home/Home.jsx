import React from 'react';
import './Home.css';
import ImgSlider from './ImgSlider';
import Movies from './Movies';
import Viewers from './Viewers';

function Home() {
  return (
    <main className='main-home__container'>
      <ImgSlider />
      <Viewers />
      <Movies />
    </main>
  );
}

export default Home;