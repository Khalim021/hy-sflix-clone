import React from 'react';
import './Home.css';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };


  return (
    <Carousel {...settings} className='main-slider__container'>
      <div className='main-img__container'>
        <img className='slider__img' src='/img/the-originals.jpg' alt='slider1'/>
      </div>
      <div className='main-img__container'>
        <img className='slider__img' src='/img/iron-man-2.jpg' alt='slider2'/>
      </div>
      <div className='main-img__container'>
        <img className='slider__img' src='/img/crash-landing-8.jpg' alt='slider3'/>
      </div>
      <div className='main-img__container'>
        <img className='slider__img' src='/img/vamp-diaries.jpg' alt='slider4'/>
      </div>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171)
    }
  }

  li.slick-active button::before {
    color: #fff;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`


