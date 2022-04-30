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
             
      <h1 style={{ fontSize:'20px', fontWeight:'bold', background: 'red', padding: '5px', margin: '5px'}}> Bienvenidos a la tienda </h1>
      
      <h2 style= {{ fontSize:'15px',fontWeight:'bold', padding: '10px', margin:'10px'}}> Productos </h2>
            
      <ItemListContainer/>
     
    </>
  );
}

export default App;

