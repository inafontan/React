import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemListContainer  from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './components/context/CartContext';
import AppContextProvider from './components/context/AppContext';
import CartView from './components/CartView';
import dataToFirestore from './data/dataToFirestore';
function App() {
  return (
    <>
      <AppContextProvider>
        <CartContextProvider>
          <BrowserRouter>   
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer greeting={'Inicio'} />} />
              <Route path="/categoria/:catId" element={<ItemListContainer greeting={'Resumen'} />} />
              <Route path="/product/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartView />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </AppContextProvider>
                    <button onClick={ () => dataToFirestore() }>Guardar en Firestore</button>

    </>
  )
}

export default App;
