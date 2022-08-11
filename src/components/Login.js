import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
      <LoginImg>
        <LoginOne src='/img/cta-logo-one.svg' alt='logo1'/>
        <GetAccess>Get Full Access</GetAccess>
        <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Beatae, minus voluptates! Voluptates, laborum quibusdam. Deleniti enim ipsam porro culpa, 
          soluta aut optio obcaecati officiis sequi at repellendus quam quidem animi.
          soluta aut optio obcaecati officiis sequi at repellendus quam quidem animi.
        </Desc>
        <LoginTwo src='/img/cta-logo-two.png' alt='logo2'/>
      </LoginImg>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url('https://images2.alphacoders.com/678/678836.jpg');
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.8;
  }
`
const LoginImg = styled.div`
  width: 80%;
  max-width: 650px;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`
const LoginOne = styled.img`
  width: 70%;
`
const LoginTwo = styled.img`
  width: 80%;
`

const GetAccess = styled.a`
  width: 100%;
  background-color: #0063e5;
  text-transform: uppercase;
  color: #ffffff;
  padding: 15px 0;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;
  border-radius: 5px;

  &:hover {
    background: #0483ee;
  }
`
const Desc = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`





