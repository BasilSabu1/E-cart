import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import { Route,Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <h1>E-Kart</h1>
<Header/>
      <Routes>
<Route path={'/'} element={<Home/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/wishlist' element={ <Wishlist/>}/>
</Routes>

<Footer/>
    </div>
  );
}

export default App;
