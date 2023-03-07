import React, {useState, useEffect} from 'react'
import image1 from './../../public/gallery/1.jpeg'
import image2 from './../../public/gallery/2.jpeg'
import image3 from './../../public/gallery/3.jpeg'
import image4 from './../../public/gallery/4.jpeg'
import image5 from './../../public/gallery/5.jpeg'
import image6 from './../../public/gallery/6.jpeg'
import image7 from './../../public/gallery/7.jpeg'
import image8 from './../../public/gallery/8.jpeg'
import image9 from './../../public/gallery/9.jpeg'
import image10 from './../../public/gallery/10.jpeg'
import image11 from './../../public/gallery/11.jpeg'
import image12 from './../../public/gallery/12.jpeg'





const useImages = () =>{
    const [images, setImg] :any  = useState([image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12])

    return {images, setImg}
    
}
export default useImages