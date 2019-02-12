import React, { Component } from 'react';
import styled from 'styled-components';
import Image from './../assets/icons/icon.png';

export default class App extends Component {
  render() {
    return <AppContainer>
      <h1>Uprzejmie Donoszę!</h1>
      <img src={Image} />
      <button onClick={() => console.log('hello')}>click</button>
    </AppContainer>;
  }
}

const AppContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  color: green;
`;
