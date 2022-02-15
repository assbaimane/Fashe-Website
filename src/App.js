import { useState, useEffect } from 'react';
import './App.sass';
import Header from './components/Header/Header'
import Home from './components/pages/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  // --------------------------- DATA ------------------------


  // --------------------------- FUNCTIONS ------------------------


  // --------------------------- DISPLAY ------------------------
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;