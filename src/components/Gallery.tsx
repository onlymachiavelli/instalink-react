import React, {} from 'react'
import useImages from './Images'
const Gallery = () =>{
    const {images, setImg} = useImages()
    return (
        <div className='w-full h-auto grid grid-cols-3 overflow-hidden'>
            {
                images.map((img:any, index : any )=>{
                    return (
                        <img  width="400" height={"400"} src={img}/>
                    )
                })
            }

        </div>
    )
}

export default Gallery