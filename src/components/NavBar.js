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
            <li><a href="/category/boardGames">Juegos de Mesa</a></li>
            <li><a href="/category/coolMerch">Cool Merch</a></li>
            <li><a href="/category/calendar">Calendario</a></li>
            <li><a href="/category/social">Redes sociales</a></li>
            <li><a href="/category/contact">Contacto</a></li>
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