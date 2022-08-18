//Stylesheets
import './App.css';

//Components
import NavBar from './components/NavBar'
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import CartContainer from './containers/CartContainer';
import AccountContainer from './containers/AccountContainer';
import CartContextProvider from './context/CartContext';
import OrderContextProvider from './context/OrderContext';

//Libraries

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <CartContextProvider>
      <OrderContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes >
            <Route index path='/' element={<ItemListContainer saludo='Buenas noches y bienvenido' website='Homies Night'/>}/>
            <Route index path='/category/:id' element={<ItemListContainer saludo='Buenas noches y bienvenido' website='Homies Night'/>}/>
            <Route exact path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route exact path='/cart' element={<CartContainer  />}/>
            <Route exact path='/account/:id' element={<AccountContainer  />}/>
          </Routes>
        </BrowserRouter>
      </OrderContextProvider>
    </CartContextProvider>
  );
}

export default App;
