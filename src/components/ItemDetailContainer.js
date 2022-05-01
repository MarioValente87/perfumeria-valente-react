import React, {useEffect, useState} from 'react';
import ItemDetail from "./ItemDetail";
import { productList } from '../data/Data.js'


const ItemDetailContainer = () => {

  const [detalle, setDetalle] = useState([])

  useEffect (()=>{
    getItem()
  },[])

  const getItem = () =>{
    const getItemPromise = new Promise((resolve,reject)=>{
      setTimeout (()=>{
        resolve(productList.filter(item => item.id === 1))
      },2000)
    })
    getItemPromise.then(data => {
      setDetalle(data);
    })
  }

    return ( 
      <> 
      <h2 className="item-list-container__title">Detalles producto</h2>
      <section className="item-list-container container mx-auto flex items-center">
        {detalle.map (d =><ItemDetail key={d.id} detalles={d}/>)}
      
      </section>
      </>
)
}

export default ItemDetailContainer;