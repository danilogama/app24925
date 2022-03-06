import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import { NotificationServicesProvider } from './services/notifications/NotificationServices';
import Cart from './components/Cart/Cart'

function App() {
  return (
    <div className="App">
      <NotificationServicesProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path='/about' element={<h1>About</h1>} />
              <Route path='/category/:categoryId' element={<ItemListContainer />}/>
              <Route path='/item/:productId' element={<ItemDetailContainer />}/>
              {/* <Route path='/cart' element={<h1>Cart</h1>}/> */}
              <Route path='/cart' element={<Cart />}/>
            </Routes>    
          </BrowserRouter>
        </CartContextProvider>
      </NotificationServicesProvider>
    </div>
  );
}

export default App;
