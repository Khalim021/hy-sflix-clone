import React from 'react';
import './Home.css';
import styled from 'styled-components';

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src='/img/viewers-disney.png' alt='disney' />
      </Wrap>
      <Wrap>
        <img src='/img/viewers-marvel.png' alt='marvel' />
      </Wrap>
      <Wrap>
        <img src='/img/viewers-national.png' alt='national' />
      </Wrap>
      <Wrap>
        <img src='/img/viewers-pixar.png' alt='pixar' />
      </Wrap>
      <Wrap>
        <img src='/img/viewers-starwars.png' alt='starwars' />
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`
const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  cursor: pointer;
  transition: 300ms;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale( 1.05);
    border-color: #fff;
  }

`




















