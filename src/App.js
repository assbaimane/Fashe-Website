import './App.sass';
import {useEffect, useState} from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './components/pages/Home/Home'
import Products from './components/pages/Products/Products'
import About from './components/pages/About/About'
import Contact from './components/pages/Contact/Contact'
import Fav from './components/pages/Fav/Fav'
import Cart from './components/pages/Cart/Cart'
import Footer from './components/Footer/Footer'

function App() {
  // --------------------------- DATA ------------------------
  const [shopBag, setShopBag] = useState([])  

  // --------------------------- FUNCTIONS ------------------------
  const addToBag = (product) =>{
      console.log("Heyyy, tu as ajouté ça à ton panier " + product);
      setShopBag(shopBag => [...shopBag, product]);
  }

  // --------------------------- DISPLAY ------------------------
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path={'/'} element={<Home />}/>
          <Route path={'/products'} element={
            <Products 
                addToBag = {(param) => addToBag(param)}
            />}/>
          <Route path={'/about'} element={<About />}/>
          <Route path={'/contact'} element={<Contact />}/>
          <Route path={'/fav'} element={<Fav />}/>
          <Route path={'/cart'} element={
            <Cart 
                shopBag = {shopBag}
            />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;