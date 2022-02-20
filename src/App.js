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
  const [favBag, setFavBag] = useState([])  
  const [selectedProduct, setSelectedProduct] = useState([])  

  // --------------------------- FUNCTIONS ------------------------
  const addToBag = (product) =>{
    if(shopBag.includes(product)){
      product.quantity++;
      alert("La quantité de "+ product.name + " a été mis à jour !");
    }
    else{
      product.quantity++;
      setShopBag(shopBag => [...shopBag, product]);
      alert(product.name + "a été ajouté à ton panier !");
    }
  }

  const addToFav = (product)=>{
    if(favBag.includes(product)){
      alert(product.name + " a déjà été ajouté à favoris !");
    }
    else{
      setFavBag(favBag => [...favBag, product]);
      alert(product.name + "a été ajouté au favoris !");
    }
  }

  const fromFavToBag = (product,index) =>{
    addToBag(product);
    // Delete the item from fav (after adding it to bag)
    let copyFav = [...favBag];
    copyFav.splice(index, 1);
    setFavBag(copyFav);
  }

  // --------------------------- DISPLAY ------------------------
  return (
    <div className='App'>
      <BrowserRouter>
        <Header
            shopBag = {shopBag}
        />
        <Routes>
          <Route path={'/'} element={<Home />}/>
          <Route path={'/products'} element={
              <Products 
                  addToBag = {addToBag}
                  addToFav = {addToFav}
                  setSelectedProduct = {setSelectedProduct}
              />}/>
          <Route path={'/products/productDetail'} element={<ProductDetail 
              selectedProduct = {selectedProduct}
          />} >
          </Route>
          <Route path={'/about'} element={<About />}/>
          <Route path={'/contact'} element={<Contact />}/>
          <Route path={'/fav'} element={
            <Fav 
                favBag = {favBag}
                fromFavToBag = {fromFavToBag}
            />}/>
          <Route path={'/cart'} element={
            <Cart 
                shopBag = {shopBag}
                setShopBag = {setShopBag}
            />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;