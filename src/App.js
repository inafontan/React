import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import CartWidget from './components/CartWidget';

function App() {
   
  const stylesP = {
    border: 'solid 3px black',  
    padding: '10px',  
    margin: '10px',
}

  return (                      //dentro del return le decimos que se va a ver
    <>
      <NavBar />
       
      
      <h1 style={{ background: 'red', padding: '5px', margin: '5px'}}>Hola!</h1>
      <p style={stylesP}>Desafío Crear la App utilizando Cli - Clase 1/2</p>
      <button class="btn">Click Aquí</button>
      
      <ItemListContainer saludo='Bienvenido a la tienda!' />
    </>
  );
}

export default App;

