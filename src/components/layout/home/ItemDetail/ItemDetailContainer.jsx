import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LoaderCircular from '../../../shared/LoaderCircular';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loader, setLoader] = useState(true);
    const { idProduct } = useParams();

    useEffect(()=>{
        let arrayProducts = [
            {id: 100, title: "Short de futbol", price: 35, categoria: 'futbol', pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_763145-MLA32645967609_102019-W.jpg", stock:6, description: 'Tela  de primera calidad. Lavar con agua fria.'},
            {id: 101, title: "Short de rugby", price: 40, categoria: 'rugby', pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_691936-MLA43986811943_112020-V.jpg", stock:4, description: 'Tela  de primera calidad. Lavar con agua fria. Algodon peinado'},
            {id: 102, title: "Calza ciclista", price: 29, categoria: 'ciclismo', pictureUrl: "https://metasports.com.py/media/catalog/product/cache/b2a5ac4ab402bf1fe90b276737a2a112/high_low/apparel/HILOWSC010-1.jpg", stock:5, description: 'Lavar con agua fria. Secar en la sombra'},
            {id: 104, title: "Short pollera", price: 30, categoria: 'gimnasio', pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_987674-MLA31709255457_082019-O.jpg", stock:3, description: 'Uso diario. Lavar con agua fria. Talle: S - M'},
            {id: 105, title: "Remera deportiva", price: 30, categoria: 'gimnasio', pictureUrl: "https://assets.adidas.com/images/w_600,f_auto,q_auto/c1ab2420a9a24373b916abc6013c1cc6_9366/Remera_Deportiva_Goofy_(UNISEX)_Negro_GH0357.jpg", stock:3, description: 'Talle: L-XL-XXL. Tela  de primera calidad. Aldogon peinado.'},
            {id: 106, title: "Media Futbol", price: 30, categoria: 'futbol', pictureUrl: "https://cf.shopee.com.ar/file/b8d13ccda2741d35424cda797edf2c5b_tn", stock:3, description: 'Se puede usar con canillera. Tela  de primera calidad.'},
        ]

        const promiseSetItem = new Promise((res,req)=>{
            setTimeout(()=>{
                
                    res(arrayProducts.find(item => item.id === parseInt(idProduct)));
                    setLoader(false);
            
            },2000)
        });

        promiseSetItem.then(res=>{
            setItem(res)
        })
    },[])

  return (
    <div>
        {loader ? <LoaderCircular/> : <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer