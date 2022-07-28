//Stylesheets
import './App.css';

//Components
import NavBar from './components/NavBar'
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import CartContainer from './containers/CartContainer';
import CartContextProvider from './context/CartContext';

//Libraries

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes >
          <Route index path='/' element={<ItemListContainer saludo='Buenas noches y bienvenido' website='Homies Night'/>}/>
          <Route index path='/category/:id' element={<ItemListContainer saludo='Buenas noches y bienvenido' website='Homies Night'/>}/>
          <Route exact path='/item/:itemId' element={<ItemDetailContainer />}/>
          <Route exact path='/cart' element={<CartContainer  />}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
