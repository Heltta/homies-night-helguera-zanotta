import logo from '../assets/images/logo.svg'
import profile from '../assets/images/profile.svg'
import CartWidget from './CartWidget.js'
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
        <a id="UserProfile" href="#signin">
            <img src={profile} alt="profile"/>
        </a>
      </header>
      );
  }

export default NavBar