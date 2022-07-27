//Stylesheets
import './App.css';

//Components
import NavBar from './components/NavBar'
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer'
import Cart from './containers/Cart'
import CartContext from './context/CartContext';

//Libraries

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <CartContext.Provider value={[]}>
      <BrowserRouter>
        <NavBar />
        <Routes >
          <Route index path='/' element={<ItemListContainer saludo='Buenas noches y bienvenido' website='Homies Night'/>}/>
          <Route index path='/category/:id' element={<ItemListContainer saludo='Buenas noches y bienvenido' website='Homies Night'/>}/>
          <Route exact path='/item/:itemId' element={<ItemDetailContainer />}/>
          <Route exact path='/cart' element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
