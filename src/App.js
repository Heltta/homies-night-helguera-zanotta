import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo='Buenas noches y bienvenido' website='Homies Night'/>
    </>
  );
}

export default App;
