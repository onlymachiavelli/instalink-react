import React, {} from 'react'
import Header from '../components/header'
import SLD from '../components/sld'
import Stats from '../components/stats'
import logo from './../assets/logo.png'
import { Toaster, toast } from 'react-hot-toast'
import Partners from '../components/partners'
import sbi from './../assets/sbi.png'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
const Home = () =>{
    return (
        <div className='w-full h-auto'>
            <Header/>
            <SLD/>
            <br/>
            <Stats
                Projects={"+100"}
                Clients={"+250"}
                Awards={"59"}
            />
            <Gallery/>
            <div className='w-2/3 m-auto pb-20'> 
                <img src={logo} className="m-auto" />
                <p className='pl-5 text-[#06a3da] font-bold text-xl pb-5'>About InstaLink : </p>
                <p className='pl-10'>Due to the lack of security in homes and weak management, Instalink provides users and customers with home technology gadgets that provide them with services that save them time and security.
and easy management for users.</p>
            </div>
            
            <Partners
                Images={[sbi]}
            />

            <Toaster 
                position="top-right"
                reverseOrder={false}
            />

            <Footer/>
        </div>
    ) 
}

export default Home 