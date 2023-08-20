/* import React,{useState} from 'react';
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom';
import LOGO from './Images/02_0x0-Tesla_T_White.png'


const Navbar = () => {
  
   const[menuOpen,setMenuOpen] = useState(false);


  return (
    <nav>
       
         <Link to="/" className='title'>T E S L A</Link> 
        <div className='menu' onClick={() => {
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink to="/vehicles">Vehicles</NavLink>
            </li>
            <li>
                <NavLink to="/energy">Energy</NavLink>
            </li>
            <li>
                <NavLink to="/charging">Charging</NavLink>
            </li>
            <li>
                <NavLink to="/shop">Shop</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar */

import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
       
        <Link to="/" className='title'>T E S L A</Link> 
   
        <ul >
            <li>
                <NavLink to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink to="/vehicles">Vehicles</NavLink>
            </li>
            <li>
                <NavLink to="/energy">Energy</NavLink>
            </li>
            <li>
                <NavLink to="/charging">Charging</NavLink>
            </li>
            <li>
                <NavLink to="/shop">Vehicle Accessories</NavLink>
            </li>
        </ul>
   </nav>
  )
}

export default Navbar