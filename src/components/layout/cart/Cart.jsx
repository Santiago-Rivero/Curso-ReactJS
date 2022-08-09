import React, { useEffect, useState } from 'react'
import LoaderCircular from './../../shared/LoaderCircular'

const Cart = () => {
    const[loader, setLoader] = useState(true)

    useEffect( () =>{
        setTimeout(()=>{
            setLoader(false)
        },2000)
    },[])
  return (
    <div>
        {loader ? <LoaderCircular/> : <p>Componente cart</p>}
    </div>
  )
}

export default Cart