import { useEffect, useState } from 'react'
import Item from '../ItemList/Item';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const [item, setItem] = useState({})

    useEffect(()=>{
        let itemMock = {
            id: 100,
            title: "Short de futbol",
            description: "Es como un pantalón común, pero más corto que este, normalmente está por arriba de las rodillas, actualmente se han puesto de moda incluso más largos que llegan al nivel de las rodillas o más abajo.",
            price: 35,
            pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_763145-MLA32645967609_102019-W.jpg",
            stock:6
        };

        const promiseSetItem = new Promise((res,req)=>{
            setTimeout(()=>{
                res(itemMock)
            },2000)
        });

        promiseSetItem.then(res=>{
            setItem(res)
        })
    },[])
  return (
    <div>
        <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer