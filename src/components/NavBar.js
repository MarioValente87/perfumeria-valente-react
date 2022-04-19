import React from 'react';


const NavBar = () => {
    return ( 
        
        <div data-theme="cmyk" className="navbar">
  <div className="flex-auto w-64">
    <a href="/#" className="btn btn-ghost normal-case text-xl">Perfumería</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><a href="/#">Inicio</a></li>
      <li><a href="/#">Perfumes</a></li>
      <li><a href="/#">Ubicación</a></li>
      <li><a href="/#">Contacto</a></li>
    </ul>
  </div>
</div>
        
    );
}

export default NavBar;