import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  const categories = [
    { id: 'all', address: '/', text: 'Venta de Whatsapp' },
    { id: 'c1', address: 'categoria/Informática', text: 'Informática' },
    { id: 'c2', address: 'categoria/CuidadoPersonal', text: 'Cuidado Personal' },
    { id: 'c3', address: 'categoria/Decoración', text: 'Decoración' },
  ];

  const styleNav = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 1rem',
    backgroundColor: 'purple',
    fontSize: '1.5rem',
    fontfamily: 'Monospace',
    fontWeight: 'bold',
    border: '1px solid black',
    boxShadow: '0 0.5rem 1rem rgba(0,0,0,1)',
    color: 'white',
  };

  return (
    <div style={styleNav}>
      {categories.map((cat) => {
        return (
          <div className="links" key={cat.id}>
            <NavLink
              to={cat.address}
              className={({ isActive }) => (isActive ? 'activeClass' : '')}
            >
              {cat.text}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};


