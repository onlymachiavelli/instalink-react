import React, {} from 'react'


const Stats = ({...props}) =>{
    return (
        <div className='grid w-4/5 h-auto grid-cols-3 gap-4 m-auto pb-10'>

            <div className='bg-[#06a3da] text-center p-10 shadow-2xl'>
                <i className="fa fa-thumbs-up text-white text-6xl" aria-hidden="true"></i>
                <p className='text-white font-bold text-xl'>Happy Clients</p>
                <p className='text-white font-bold'>{props.Clients}</p>
            </div>

            <div className='bg-[#eef9ff] text-center p-10 shadow-2xl'>
                <i className="fa fa-check-circle text-[#06a3da] text-6xl" aria-hidden="true"></i>

                <p className='text-[#06a3da] font-bold text-xl'>Project Done</p>
                <p className='text-[#06a3da] font-bold'>{props.Projects}</p>
            </div>
            <div className='bg-[#06a3da] text-center p-10 shadow-2xl'>
                <i className="fa fa-trophy text-white text-6xl" aria-hidden="true"></i>
                <p className='text-white font-bold text-xl'>Win Awards</p>
                <p className='text-white font-bold'>{props.Awards}</p>
            </div>
        </div>
    )
}

export default Stats