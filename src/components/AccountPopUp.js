import { Link } from 'react-router-dom'
import '../css/AccountPopUp.css'

function AccountPopUp(){
    return(
        <section className='accountPopUp'>
            <Link to={`/account/signin`}>Iniciar sesión</Link>
            <Link to={`/account/register`}>Registrarse</Link>
            <Link to={`/account/checkorder`}>Comprobar orden</Link>
        </section>
    )
}

export default AccountPopUp
