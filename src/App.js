import './App.css';
import NavBar from './components/NavBar'
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo='Buenas noches y bienvenido' website='Homies Night'/>
      <ItemDetailContainer itemId={1}/>
    </>
  );
}

export default App;
