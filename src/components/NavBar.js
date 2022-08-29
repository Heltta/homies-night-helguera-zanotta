import logo from '../assets/images/logo.svg'
import CartWidget from './CartWidget.js'
import AccountWidget from './AccountWidget'
import '../css/NavBar.css'
import {Link} from 'react-router-dom'
import { useCartContext } from "../context/CartContext";
import { getAllCategories } from '../helpers/getProducts'
import { useState, useEffect } from 'react'

const NavBar = () => {
  const { isCartEmpty } = useCartContext();
  const [ categories, setCategories ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(()=>{
      //Load categories and change loading state
      //to false when loaded.
      getAllCategories(
          (fbData)=> {
            setCategories(fbData);
            setLoading(false);
          });
      //Reset loading state to true at dismount
      return(setLoading(true))
  },[])

    return (  
      <header>
        
        <Link id="homebtn" to="/">
          <img src={logo} alt="logo" />
          <span>Homies Night</span>
        </Link>
        <nav>
          <ul>
            {categories.map(category => 
                <li key={category.id} >
                    <Link to={`/category/${category.filter}`} >{category.name}</Link>
                </li> ) }
          </ul>
        </nav>
        <CartWidget emptyCart={!isCartEmpty()}/>
        <AccountWidget/>
      </header>
      );
  }

export default NavBar