import React, {} from 'react'
import Header from '../components/header'
import SLD from '../components/sld'

import { Toaster, toast } from 'react-hot-toast'
const Home = () =>{
    return (
        <div className='w-full h-auto'>
            <Header/>
            <SLD/>

            <Toaster 
                position="top-right"
                reverseOrder={false}
            />
        </div>
    ) 
}

export default Home 