import './App.css'
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/layout/header/Navbar'

import ItemListContainer from './components/layout/home/ItemListContainer'
import ItemDetailContainer from './components/layout/home/ItemDetail/ItemDetailContainer'
import Cart from './components/layout/cart/Cart'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/category/:idCategory" element={<ItemListContainer />}/>
        <Route path="/product/:idProduct" element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
