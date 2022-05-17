import React, {useState} from 'react'
import { useAppContext } from './context/AppContext'
import { useCartContext } from './context/CartContext'

const Contador = ({stock, onAdd, id}) => {
const [count, setCount] = useState(0)

const {addToCart}= useCartContext()
const {products}= useAppContext()


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


const handleClick = (id, cantidad) => {
    const findProduct = products.find((producto)=> producto.id === id)
    if(!findProduct){
        alert("Error en la base de dates")
        return
    
    }
    addToCart(findProduct,cantidad)
    onAdd(count)
}

return ( 

        <>
        <div className='flex flex-wrap gap-4 mt-4'>
            <div className='cantidad flex justify-around'>
                <button className='btn' onClick={restHandler}>  - </button>
                <label className='alert alert-white'> {count} </label>
                <button className='btn' onClick={addHandler}>  + </button>
                </div>
            <button className='btn bg-primary text-white btn-block' onClick= {()=> handleClick(id,count)}>Agregar al Carrito</button>
            
        </div>
        </>

    );
}
export default Contador;