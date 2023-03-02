import React, {} from 'react'
import Header from '../components/header'
import SLD from '../components/sld'
import Stats from '../components/stats'

import { Toaster, toast } from 'react-hot-toast'
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
            <Toaster 
                position="top-right"
                reverseOrder={false}
            />
        </div>
    ) 
}

export default Home 