import React, {useEffect, useState} from 'react';
import Item from './Item.js';
import { productList } from '../data/data.js';


const ItemList = () => {

    const [products, setProducts] = useState([])

    const getProducts= new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(productList)
        },2000)
    });

const getProductFromDB= async () => {
    try {
        const result = await getProducts;
        setProducts(result);
     } catch(error){
         console.log(error);
         alert("No podemos mostrar los productos en este momento")
     }
};

useEffect(()=>{
    getProductFromDB();
},[]);

    return ( 
        <div className='product-list-container'>
            {
                products.length ? (
                    <>
                    {
                        products.map((product)=>{
                            return (
                                <div key= {product.id}>
                                    <Item 
                                    name={product.name}
                                    thumbnail= {product.thumbnail}
                                    price={product.price}
                                    id= {product.id}
                                    stock={product.stock}
                                     />
                                </div>
                            )
                        })
                    }
                    </>
                ): ` No hay producto`
            }
        </div>
     );
}
 
export default ItemList;