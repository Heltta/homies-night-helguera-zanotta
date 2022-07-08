import logo from '../images/logo.svg'
import profile from '../images/profile.svg'
import '../css/NavBar.css'
const NavBar = () => {
    return (  
      <header>
        
        <a id="homebtn" href="#home">
          <img src={logo} alt="logo" />
          <span>Homies Night</span>
        </a>
        <nav>
          <ul>
            <li><a href="#boardgames">Juegos de Mesa</a></li>
            <li><a href="#merch">Cool Merch</a></li>
            <li><a href="#calendar">Calendario</a></li>
            <li><a href="#social">Redes sociales</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
        <a id="UserProfile" href="#signin">
            <img src={profile} alt="profile"/>
        </a>
      </header>
      );
  }

export default NavBar