import React from 'react';
import { NavBar } from './components/NavBar';
import CartWidget from './components/CartWidget';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';

export default function App() {
 
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer greeting={'Inicio'} />} />
        
        <Route path="/categoria/:catId" element={<ItemListContainer greeting={'Resumen'} />} />

        <Route path="/product/:itemId" element={<ItemDetailContainer />} />
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <CartWidget />

    </BrowserRouter>
  );
}
