import React from 'react';
import './App.css';
import Saludo from './components/Saludo';
import NavBar from './components/NavBar';
import { ItemListContainer } from './/components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetail from './components/ItemDetail';

function App() {
   
  const stylesP = {
    border: 'solid 3px black',  
    padding: '10px',  
    margin: '10px',
}

  return (                      //dentro del return le decimos que se va a ver
   
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
         <Route path='/' element={<Saludo />} />
         <Route path='/info/:infoId' element={<ItemDetail/>} />
        </Routes>
      </BrowserRouter>
      
      <ItemListContainer />
    </>
     
    
  );
}

export default App;

