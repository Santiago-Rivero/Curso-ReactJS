import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import LoaderCircular from "../../shared/LoaderCircular";
import ItemList from "./ItemList/ItemList";

import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemListContainer = () =>{
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true)
    const { idCategory } = useParams();

    useEffect(() => {
        console.log('idCategory', idCategory);
        const db = getFirestore();
        const refToProducts = collection(db, 'products')
        
        getDocs(refToProducts).then(res => {
            setProducts(res.docs.map( doc => ({id: doc.id, ...doc.data()})))
        }).finally(() =>{
            setLoader(false);
        })

        if(idCategory){
            setLoader(true);
            const q = query(collection(db, 'products'), where('category', '==', idCategory));
            getDocs(q).then(res => {
                if(res.size == 0){
                    console.log('error');
                }
                setProducts(res.docs.map( doc => ({id: doc.id, ...doc.data()})))
            }).finally(setLoader(false))

        }

        

    }, [idCategory]);

    return(
        <div>
            {loader ? <LoaderCircular/> : <ItemList products={products}/>}
        </div>
        
    )
}

export default ItemListContainer