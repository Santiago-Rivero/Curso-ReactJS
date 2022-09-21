import './App.css'
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/layout/header/Navbar'

import ItemListContainer from './components/layout/home/ItemListContainer'
import ItemDetailContainer from './components/layout/home/ItemDetail/ItemDetailContainer'
import Cart from './components/layout/cart/Cart'
import CartContext from './components/CartContext'

function App() {

  return (
    <div className="App">
      <CartContext>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/category/:idCategory" element={<ItemListContainer />}/>
          <Route path="/product/:idProduct" element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </CartContext>
    </div>
  )
}

export default App
