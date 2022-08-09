import { useState } from "react";
import "./itemCount.css"

const ItemCount = ({initial, stock, count, setCount}) =>{

    const [itemsAdded, addItem] = useState(1);

    const setItem = (value) =>{
        if( value ){
            itemsAdded < stock ? addItem(itemsAdded + 1): '';
        }else{
            itemsAdded > initial ? addItem(itemsAdded - 1) : '';
        }
    }

    const handleClick = () =>{
        setCount(itemsAdded);
    }

    return (
        <div className="container">
            <section className="controls">
                <button onClick={()=>setItem(0)} className="btn">
                    -
                </button>
                <span>
                    {itemsAdded}
                </span>
                <button onClick={()=>setItem(1)} className="btn">
                    +
                </button>
            </section>
            
            <section>
                <button className="btn btn-select" onClick={handleClick}>
                    Agregar al carrito
                </button>
            </section>
        </div>
    )

}

export default ItemCount;