import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/layout/header/Navbar'

import ItemListContainer from './components/layout/home/ItemListContainer'
import ItemDetailContainer from './components/layout/home/ItemDetail/ItemDetailContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* <ItemListContainer name="Anthony"/> */}
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/category/:idCategory" element={<ItemListContainer />}/>
        <Route path="/product/:idProduct" element={<ItemDetailContainer />}/>
      </Routes>
    </div>
  )
}

export default App
