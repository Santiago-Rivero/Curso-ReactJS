import React from 'react'
import "./navbar.css"
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const nameList = ['Home', 'Proyectos', 'Nostoros', 'Contactanos'];
    
    return (
        
        <ul className='ul-navbar'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'category/futbol'}>Futbol</Link></li>
            <li><Link to={'category/gimnasio'}>Gimnasio</Link></li>
            <li>Contactanos</li>
            <li><CartWidget/></li>
        </ul>
        
    )
}

export default Navbar