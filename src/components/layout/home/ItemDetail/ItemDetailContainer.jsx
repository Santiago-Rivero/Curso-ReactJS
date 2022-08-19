import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LoaderCircular from '../../../shared/LoaderCircular';
import ItemDetail from './ItemDetail';

import {doc, getDoc, getFirestore} from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loader, setLoader] = useState(true);
    const { idProduct } = useParams();

    useEffect(()=>{
        const db = getFirestore();
        const refToProd = doc(db, 'products', idProduct);
        getDoc(refToProd).then(res => {
            setItem({id: res.id, ...res.data()})
        }).finally( setLoader(false))
    },[])

  return (
    <div>
        {loader ? <LoaderCircular/> : <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer