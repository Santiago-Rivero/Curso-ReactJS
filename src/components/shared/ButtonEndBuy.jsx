import React from 'react'
import {Link} from 'react-router-dom'

const ButtonEndBuy = () => {
  return (
    <button className="btn btn-select">
        <Link to={'/cart'}>Terminar mi compra</Link>
    </button>
  )
}

export default ButtonEndBuy