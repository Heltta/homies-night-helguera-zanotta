import { Link } from 'react-router-dom'

function AccountPopUp(){
    return(
        <section>
            <Link to={`/account/signin`}>Iniciar sesión</Link>
            <Link to={`/account/register`}>Registrarse</Link>
            <Link to={`/account/checkorder`}>Comprobar orden</Link>
        </section>
    )
}

export default AccountPopUp
