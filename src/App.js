import React from 'react';
import './App.css';
import { NextUIProvider, Button } from '@nextui-org/react';
import Nav from './Nav';
import Hero from './Hero';
import { useState } from 'react';
import Phones from './Phones';



function App({ Component }) {

  return (
    <NextUIProvider>
    <Nav />
    <Hero />
    <Phones />
    </NextUIProvider>
  );
}

export default App;
