import React from 'react';
import { useEffect } from 'react';
import './Home.css';
import ImgSlider from './ImgSlider';
import Movies from './Movies';
import Viewers from './Viewers';
import db from '../../firebase';

function Home() {

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        console.log(doc.data());
        return {id: doc.id, ...doc.data()}
      })
    })
  }, []);

  return (
    <main className='main-home__container'>
      <ImgSlider />
      <Viewers />
      <Movies />
    </main>
  );
}

export default Home;