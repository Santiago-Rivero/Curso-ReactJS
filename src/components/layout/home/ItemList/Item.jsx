import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./itemCount.css"

const Item = ({item}) => {

    const [itemsAdded, addItem] = useState(1);
    
  return (
    <section className='container'>
        <h6>Nombre del producto: {item && item.title}</h6>
        <img src={item.pictureUrl} alt='image' style={{maxHeight: 120}}/>
        
        <span className='text-stock'>Stock: {item.stock}</span>
        <p>
            <button className="btn btn-select">
                <Link to={`/product/${item.id}`}>Ver detalle</Link>
            </button>
        </p>
    </section>
  )
}

export default Item