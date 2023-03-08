import React, {} from 'react'
import Navbar from './navbar'
import {Link} from 'react-router-dom'
import comp from './../assets/bck.jpg'
const SLD = () =>{
    return (
        <div className='w-full h-screen  bg-cover bg-norepeat bg-fixed' style={{backgroundImage :`url(${comp})`}}>
            <div className='w-full h-full bg-[#000000a1] overflow-hidden'>
                <Navbar/>

                <div className='w-full h-4/5 flex justify-center items-center text-center '>
                    <div>
                        <p className='text-white'>CREATIVE & INNOVATEIVE</p>
                        <p className='text-white text-6xl font-bold'>Creative & Innovative</p>
                        <p className='text-white text-6xl font-bold'>Digital Solution</p>
                        <br/>
                        <div className='flex gap-4 justify-center'><Link to={""} className="text-white px-10 py-4 bg-[#06a3da]">Free Quote</Link>
                        <Link to={""} className="text-white px-10 py-4 bg-none border border-white duration-500 hover:bg-[#ffffff57]">Contact US</Link></div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}


export default SLD