import React, {useState} from 'react'

const Contador = () => {

const [count, setCount] = useState(0)

const addHandler = () =>{
    console.log("Se está sumado");
    setCount(count +1)
}
const restHandler = () =>{
    console.log("Se está restando");
    count > 0 ? setCount( count -1) :  setCount(count)
    
}

    
    return ( 

        <>
        <div className='Container border-2 border-rose-500 flex flex-col w-64 leading-10  text-center'>
            
            <div className='bg-slate-500'>Contador</div>
            <div className='cantidad flex justify-around'>
                <button className='text-4xl btn btn-info' onClick={restHandler}>  - </button>
                <strong className='text-3xl'> {count} </strong>
                <button className='text-3xl btn btn-info' onClick={addHandler}>  + </button>
                </div>
            <div className='bg-sky-500/50'>Agregar al Carrito</div>
            
        </div>
        </>

     );
}
 
export default Contador;