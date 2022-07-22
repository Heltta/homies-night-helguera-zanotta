import logo from '../assets/images/logo.svg'
import profile from '../assets/images/profile.svg'
import CartWidget from './CartWidget.js'
import '../css/NavBar.css'

const NavBar = () => {
    return (  
      <header>
        
        <a id="homebtn" href="/">
          <img src={logo} alt="logo" />
          <span>Homies Night</span>
        </a>
        <nav>
          <ul>
            <li><a href="/category/strategy">Estrategia</a></li>
            <li><a href="/category/deception">Engaño</a></li>
            <li><a href="/category/dexterity">Agilidad</a></li>
            <li><a href="/category/casual">Casuales</a></li>
          </ul>
        </nav>
        <CartWidget />
        <a id="UserProfile" href="#signin">
            <img src={profile} alt="profile"/>
        </a>
      </header>
      );
  }

export default NavBar