import React, {useState} from 'react'

const Contador = ({stock, onAdd, initial}) => {

const [count, setCount] = useState(0)

const addHandler = () =>{
    console.log("Se está sumado");
    console.log(count);
    console.log(stock);
    if  (count+1 <= stock) { 
    setCount(count +1)
    
}

}
const restHandler = () =>{
    console.log("Se está restando");
    count > 0 ? setCount( count -1) :  setCount(count)
    
}

    
    return ( 

        <>
        <div className='flex flex-wrap gap-4 mt-4'>
            <div className='cantidad flex justify-around'>
                <button className='btn' onClick={restHandler}>  - </button>
                <label className='alert alert-white'> {count} </label>
                <button className='btn' onClick={addHandler}>  + </button>
                </div>
            <button className='btn bg-primary text-white btn-block' onClick= {()=> onAdd(count)}>Agregar al Carrito</button>
            
        </div>
        </>

     );
}
 
export default Contador;