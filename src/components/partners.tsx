import React, {} from 'react'



const Partners = ({...props}) =>{
    return (
    <div className='w-3/2 m-auto text-center pb-10'>
        <p className='m-auto block text-[#06a3da] font-bold text-xl pb-5'>Our Partners : </p>
        <div className='flex w-full justify-center'>
        {
            //receive array of images 
            props.Images.map((image:any, index:any) => {
                //give max width
                return <img src={image} alt="" key={index}  />
            })

        }
        </div>
    </div>
    )
}

export default Partners