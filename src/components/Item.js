import { Link } from "react-router-dom"


function Item({id, name, price, stock, photo  }){
    return(
        <li id={id} className="product">
            <div className="name">{name}</div>
            <div className="price">$ {price}</div>
            <div className="stock">Quedan {stock}</div>
            <img className="photo" src={photo} alt={`caja de ${name}`}/>
            <Link className="detail" to={`/item/${id}`}><button>Detalle</button></Link>
        </li>
    )
};

export default Item