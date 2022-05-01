import React from 'react';

const ItemDetail = ({detalles}) => {

    const {name,price,stock,thumbnail,descripcion}= detalles

    return ( 
        <>
        <div className="card card-side bg-base-100 shadow-xl flex-col">
  <figure><img src={thumbnail} alt="Movie" className="w-80"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{descripcion}</p>
    <p> Precio $ {price}</p>
    <p>Stock {stock}</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
        </>
        
     );
}
 
export default ItemDetail;