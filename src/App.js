import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/about' element={<h1>About</h1>} />
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/item/:productId' element={<ItemDetailContainer />}/>
          </Routes>    
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
