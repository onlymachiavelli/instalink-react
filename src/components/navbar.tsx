import React, {} from 'react'
import {Link} from 'react-router-dom'
import logo from './../assets/logo.png'
const Navbar = () =>{

    return (
        <nav className='w-full h-auto bg-none'>
            <div>
                <a href="">
                    <img src={logo} width="170" />
                </a>
            </div>

            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/"}>Services</Link>
                <Link to={"/"}>Blog</Link>
                <Link to={"/"}>Pages</Link>
                <Link to={"/"}>Contact</Link>
                <Link to={"/"}>About</Link>
            </nav> 
        </nav>
    ) 
}

export default Navbar