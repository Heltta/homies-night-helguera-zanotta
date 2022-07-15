import React from "react"
import ItemCount from "../containers/ItemCount"

function Item({id, name, price, stock  }){
    return(
        <li id={id} className="producto">
            <div>
                <span>{name}</span>
                <span>{price} dolares</span>
            </div>
            <div>{name} imagen</div>
            <ItemCount  stock={stock} 
                        initial={1}
                        onAdd={(amount) => {
                            console.log(`Se agregaron '${name}' X${amount} al carrito`)
                        }}/>
        </li>
    )
};

export default Item