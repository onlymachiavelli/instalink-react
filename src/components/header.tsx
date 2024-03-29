import React, {} from 'react'


const Header=  () =>{
    return (
        <header className='w-full h-auto bg-[#071e40] p-2 flex gap-4 justify-between'>
             <div className='flex gap-4'>
                <p className='text-white text-sm flex'><i className="fa fa-map-marker text-xl" aria-hidden="true"></i> <span className='pt-0.5 pl-2'>Only in Tunisia</span> </p>
                <p className='text-white text-sm flex'><i className="fa fa-phone text-xl" aria-hidden="true"></i>
                <span className='pt-0.5 pl-2'>+216 00 000 000</span> </p>
                <p className='text-white text-sm flex'><i className="fa fa-envelope text-xl" aria-hidden="true"></i>
                <span className='pt-0.5 pl-2'><a href="mailto: contact@instalink.tn">contact@instalink.tn</a></span> </p>
             </div>
            <div className='flex gap-3'>
                <a href=""><i className="fa fa-facebook text-white" aria-hidden="true"></i></a>
                <a target={"_blank"} href="https://www.linkedin.com/company/instalink-tn/"><i className="fa fa-linkedin text-white" aria-hidden="true"></i></a>
                <a href=""><i className="fa fa-instagram text-white" aria-hidden="true"></i></a>
                <a href=""><i className="fa fa-youtube-play text-white" aria-hidden="true"></i></a>
            </div>
        </header>
    )
}


export default Header