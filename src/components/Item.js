import React from "react"
import { Link } from "react-router-dom"


function Item({id, name, price, stock, photo  }){
    return(
        <li id={id} className="producto">
            <div>
                <span>{name}</span>
                <span>{price} dolares</span>
            </div>
            <img src={photo} alt={`caja de ${name}`}/>
            <button><Link to={`/item/${id}`}>Detalle</Link></button>
        </li>
    )
};

export default Item