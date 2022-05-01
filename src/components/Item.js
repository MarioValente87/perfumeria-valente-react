import React from 'react';
import Contador from './Contador';


const Item = ({name,thumbnail,price,id,stock}) => {
    const onAdd = (qty) => {
        alert (`Has agregado ${qty} perfume`)

    }
    console.log(stock);
    return ( 
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src= {thumbnail} alt="img" className="rounded-xl"/>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}!</h2>
    <span className='product-card__name'>$ {price}</span>
    
    <div className="card-actions">
    <Contador stock={stock} onAdd={onAdd} initial={1}/>
    </div>
  </div>
</div>
    );
}
 
export default Item;



