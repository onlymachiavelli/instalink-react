import React, {} from 'react'
import useImages from './Images'
const Gallery = () =>{
    const {images, setImg} = useImages()
    return (
        <div className='w-3/4 h-auto grid grid-cols-3 overflow-hidden m-auto'>
            {
                images.map((img:any, index : any )=>{
                    return (
                        <img  width="400" height={"400"} src={img} className="object-cover"/>
                    )
                })
            }

        </div>  
    )
}

export default Gallery