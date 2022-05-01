import React from 'react';
import ItemList from './ItemList';


const ItemListContainer = () => {

    return (
      <>
      <h2 className="item-list-container__title">Productos destacados</h2>
        <section className="item-list-container container mx-auto">
          <ItemList />
          
        </section>
      </>
      );
}

export default ItemListContainer;