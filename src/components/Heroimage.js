import React from 'react';
import bgImg from "../imagenes/heroImage.jpeg"

const Heroimage = () => {

    
    return ( 
        <>
        <div className='w-full relative'>
            <div className='w-full h-full flex flex-col absolute top-0 left-0 justify-center items-start pl-6'>
                <div className='text-6xl font-bold text-white' >Encuentra tu fragrancia</div>
                <div className='text-2xlg text-white'>Sé tu mismo pero mejor</div>
            </div> 
            <div className='w-full h-[52rem] bg-no-repeat bg-cover bg-left bg-fixed' style={{ backgroundImage: `url(${bgImg})` }}></div>
           
        </div> 
        </>
     );
}
 
export default Heroimage;