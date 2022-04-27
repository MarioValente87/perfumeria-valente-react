import React from 'react';
import Contador from './Contador';

const Item = ({name,thumbnail,price,id,stock}) => {
    const onAdd = (qty) => {
        alert (`Has agregado ${qty} perfume`)

    }
    console.log(stock);
    return ( 
        <article className='product-card'>
            <img className='product-card__image' src={thumbnail} alt=""/>
            <h3 className='product-card__name'>{name}</h3>
            <span className='product-card__name'>$ {price}</span>
            <Contador stock={stock} onAdd={onAdd} initial={1}/>
        </article>
     );
}
 
export default Item;