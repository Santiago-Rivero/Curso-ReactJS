import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/layout/header/Navbar'
import ItemListContainer from './components/layout/home/ItemListContainer'
import ItemDetailContainer from './components/layout/home/ItemDetail/ItemDetailContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      {/* <ItemListContainer name="Anthony"/> */}
      <ItemDetailContainer />
    </div>
  )
}

export default App
