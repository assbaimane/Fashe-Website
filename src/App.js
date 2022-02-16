import './App.sass';
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


  // --------------------------- FUNCTIONS ------------------------


  // --------------------------- DISPLAY ------------------------
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/products'} element={<Products />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/contact'} element={<Contact />} />
          <Route path={'/fav'} element={<Fav />} />
          <Route path={'/cart'} element={<Cart />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;