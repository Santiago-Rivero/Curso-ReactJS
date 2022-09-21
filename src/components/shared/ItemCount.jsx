import { useContext, useState } from "react";
import { myContext } from "../CartContext";
import "./itemCount.css"


const ItemCount = ({item, count, setCount, initial = 1}) =>{

    const { addItem } = useContext(myContext);

    const [itemsAdded, setAddItem] = useState(1);

    const setItem = (value) =>{
        if( value ){
            itemsAdded < item.stock ? setAddItem(itemsAdded + 1): '';
        }else{
            itemsAdded > initial ? setAddItem(itemsAdded - 1) : '';
        }
    }

    const handleClick = () =>{
        setCount(itemsAdded);
        addItem(item, itemsAdded);
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