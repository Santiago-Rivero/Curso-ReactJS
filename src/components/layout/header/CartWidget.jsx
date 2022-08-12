import { useContext } from 'react'
import wallet from '../../../assets/images/bag.png'
import { myContext } from '../../CartContext'

const CartWidget = () =>{

    const {lengthArray} = useContext(myContext);

    return (
        <>
            <img style={{maxHeight: 35}} src={wallet} alt='wallet'/>
            <span className='span-notificacion'>{lengthArray}</span>
        </>
        
    )
}

export default CartWidget