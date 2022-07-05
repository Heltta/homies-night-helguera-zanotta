import logo from '../images/logo.svg'
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
      </header>
      );
  }

export default NavBar