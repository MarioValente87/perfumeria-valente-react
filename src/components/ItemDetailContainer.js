import React, {useEffect, useState} from 'react';
import ItemDetail from "./ItemDetail"
import { productList } from '../data/Data.js'
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

  const {perfumeId} = useParams()

  const [detalle, setDetalle] = useState([])

  useEffect (()=>{
    const getItemPromise = new Promise((resolve,reject)=>{
        setTimeout (()=>{
          resolve(productList.find(item => item.id == perfumeId))
        },2000)
      })
      getItemPromise.then(data => {
        setDetalle(data);
      })
    
  },[perfumeId])

  

    return ( 
      <> 
      
      <section className="item-list-container container mx-auto flex justify-center items-center flex-col text-center mt-6">
      <h2 className="item-list-container__title text-4xl">Detalles producto</h2>
        {<ItemDetail key={detalle.id} detalles={detalle}/>}
      
      </section>
      </>
)
}

export default ItemDetailContainer;