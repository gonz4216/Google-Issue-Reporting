import React from 'react';
import './App.css';
import { NextUIProvider, Button } from '@nextui-org/react';
import Nav from './Nav';
import Hero from './Hero';
import { useState } from 'react';
import Phones from './Phones';
import PDHero from './PDHero';
import FootHero from './FootHero';
import Subcribe from './Subcribe';



function App({ Component }) {

  return (
    <NextUIProvider>
    <Nav />
    <Hero />
    <Phones />
    <PDHero />
    <FootHero />
    <Subcribe />
    </NextUIProvider>
  );
}

export default App;

