import logo from '../assets/images/logo.svg'
import CartWidget from './CartWidget.js'
import AccountWidget from './AccountWidget'
import '../css/NavBar.css'
import {Link} from 'react-router-dom'
import { useCartContext } from "../context/CartContext";

const NavBar = () => {
  const { isCartEmpty } = useCartContext();
    return (  
      <header>
        
        <Link id="homebtn" to="/">
          <img src={logo} alt="logo" />
          <span>Homies Night</span>
        </Link>
        <nav>
          <ul>
            <li><Link to={`/category/strategy`}>Estrategia</Link></li>
            <li><Link to={`/category/deception`}>Engaño</Link></li>
            <li><Link to={`/category/dexterity`}>Agilidad</Link></li>
            <li><Link to={`/category/casual`}>Casuales</Link></li>
          </ul>
        </nav>
        <CartWidget emptyCart={!isCartEmpty()}/>
        <AccountWidget/>
      </header>
      );
  }

export default NavBar