import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';


export const NavBar = () => {
  const categories = [
    { id: 'all', address: '/', text: 'Venta de Whatsapp' },
    { id: 'c1', address: 'categoria/Informática', text: 'Informática' },
    { id: 'c2', address: 'categoria/Cuidado Personal', text: 'Cuidado Personal' },
    { id: 'c3', address: 'categoria/Decoración', text: 'Decoración' },
    { id: 'c4', address: 'categoria/Electrodomésticos', text: 'Electrodomésticos' },
    { id: 'c5', address: 'categoria/Audio & Video', text: 'Audio & Video' },
  ];
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">      
      <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
          {categories.map((cat) => (
            <><li key={cat.id} className="nav-item">
              <NavLink className="nav-link" to={cat.address}>
                {cat.text}
              </NavLink>
            </li> </>
          ))}
            </ul>
      </div>
     
      <CartWidget 
        />
    
    </nav>
  );
}
export default NavBar;
