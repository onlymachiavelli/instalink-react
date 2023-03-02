import React, {} from 'react'
import {Link} from 'react-router-dom'
import logo from './../assets/logo.png'
import {toast } from 'react-hot-toast'
const Navbar = () =>{

    return (
        <nav className='w-full h-auto bg-none flex border-b border-[#ffffff5c] '>
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

                <button onClick={()=>{
                    toast.error("We Still building the website so there's no search at this time ")
                }}  className='w-none h-none'><i className="fa fa-search text-white " aria-hidden="true"></i></button>
            </nav> 
        </nav>
    ) 
}

export default Navbar