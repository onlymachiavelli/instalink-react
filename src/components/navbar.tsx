import React, {} from 'react'
import {Link} from 'react-router-dom'
import logo from './../assets/logo.png'
const Navbar = () =>{

    return (
        <nav className='w-full h-auto bg-none flex'>
            <div>
                <a href="">
                    <img src={logo} width="170" />
                </a>
            </div>

            <nav className='flex gap-4 m-5'>
                <Link to={"/"} className="text-white">Home</Link>
                <Link to={"/"} className="text-white">Services</Link>
                <Link to={"/"} className="text-white">Blog</Link>
                <Link to={"/"} className="text-white">Pages</Link>
                <Link to={"/"} className="text-white">Contact</Link>
                <Link to={"/"} className="text-white">About</Link>
            </nav> 
        </nav>
    ) 
}

export default Navbar