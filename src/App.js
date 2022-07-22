import './App.css';
import NavBar from './components/NavBar'
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes >
        <Route index path='/' element={<ItemListContainer saludo='Buenas noches y bienvenido' website='Homies Night'/>}/>
        <Route exact path='/detail/:itemId' element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
