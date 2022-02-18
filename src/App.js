import './App.sass';
import React from 'react';
import {useEffect, useState} from 'react';
import { BrowserRouter, Switch, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './components/pages/Home/Home'
import Products from './components/pages/Products/Products'
import ProductDetail from './components/pages/Products/ProductDetail/ProductDetail';
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
      alert(product.name + "a été ajouté à ton panier !");
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
          <Route path={'/products/productDetail'} element={<ProductDetail />} />
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