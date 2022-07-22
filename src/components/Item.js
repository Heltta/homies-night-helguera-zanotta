import React from "react"
import ItemCount from "../containers/ItemCount"
import { Link } from "react-router-dom"


function Item({id, name, price, stock, photo  }){
    return(
        <li id={id} className="producto">
            <div>
                <span>{name}</span>
                <span>{price} dolares</span>
            </div>
            <img src={photo} alt={`caja de ${name}`}/>
            <ItemCount  stock={stock} 
                        initial={1}
                        onAdd={(amount) => {
                            console.log(`Se agregaron '${name}' X${amount} al carrito`)
                        }}/>
            <Link to={`/item/${id}`}>Detalle</Link>
        </li>
    )
};

export default Item