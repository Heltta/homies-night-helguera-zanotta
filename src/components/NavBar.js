import logo from '../images/logo.svg'
const NavBar = () => {
    return (  
      <header>
        <img src={logo} alt="logo" />
        <a id="brandName" href="">Homies Night</a>
        <nav>
          <ul>
            <li><a href="">Juegos de Mesa</a></li>
            <li><a href="">Cool Merch</a></li>
            <li><a href="">Calendario</a></li>
            <li><a href="">Redes sociales</a></li>
            <li><a href="">Contacto</a></li>
          </ul>
        </nav>
      </header>
      );
  }

export default NavBar