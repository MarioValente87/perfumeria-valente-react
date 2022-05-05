import React from 'react';
import { Link } from 'react-router-dom';
import Contador from './Contador';


const Item = ({name,thumbnail,price,id,stock}) => {
    const onAdd = (qty) => {
        alert (`Has agregado ${qty} perfume`)

    }
    console.log(stock);
    return ( 
        <div className="card max-w-sm rounded  bg-base-100 shadow-xl object-cover w-full h-full flex items-center justify-between justify-between">
          
                 <img src= {thumbnail} alt="img" className=" h-full rounded-lg"/>
            
          <div className="card-body font-bold text-xl items-center text-center">
            <h2 className="card-title">{name}</h2>
            <span className='product-card__name'>$ {price}</span>
    
            <div className="card-actions">
              <Contador stock={stock} onAdd={onAdd} initial={1}/>
            </div>
            <Link to={`/perfume/${id}`} class="btn btn-primary">Ver Descripción</Link>
          </div>
</div>
    );
}
 
export default Item;



