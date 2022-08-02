import {Link} from 'react-router-dom'

function VoidCart(){
    return(
        <>
            <h2>Su carrito se encuentra vacío...</h2>
            <Link to="/">
                <span>Arreglemos eso!</span>
            </Link>
        </>
    )
}

export default VoidCart
