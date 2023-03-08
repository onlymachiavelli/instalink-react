import React, {} from 'react'
import useImages from './Images'
import 'react-slideshow-image/dist/styles.css'

import {Fade, Zoom , } from 'react-slideshow-image'
const Gallery = () =>{
    const {images, setImg} = useImages()
    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
      }
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
      }
    return (
        <div className='w-full h-screen overflow-hidden '>
            <Zoom scale={1.4} indicators={true} autoplay={true}>
            {images.map((each: any, index :any) => (
                <div key={index} style={{ width: "100%" }}>
                    <img style={{ objectFit: "cover", width: "100%", }} alt="Slide Image" src={each}  className="h-screen"/>
                </div>
            ))}
        </Zoom>
        </div>
    )
}

export default Gallery

/*

    {
                images.map((img:any, index : any )=>{
                    return (
                        <img  width="400" height={"400"} src={img} className="object-cover"/>
                    )
                })
            }
*/