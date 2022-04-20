import React from 'react';
import CartWidget from './CartWidget';


const NavBar = () => {
    return ( 
        
        <div data-theme="cmyk" className="navbar flex flex-wrap">
          <div className="flex-auto w-64 ">
            <a href="/#" className="btn btn-ghost normal-case text-xl">Perfumería</a>
        </div>
        <div className="flex-none flex-wrap: wrap">
          <ul className="menu menu-horizontal p-0">
            <li><a href="/#">Inicio</a></li>
            <li><a href="/#">Perfumes</a></li>
            <li><a href="/#">Ubicación</a></li>
            <li><a href="/#">Contacto</a></li>
          </ul>
      <CartWidget/>
      </div>
    </div>
        
    );
}

export default NavBar;