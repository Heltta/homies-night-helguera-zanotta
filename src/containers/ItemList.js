import React from "react"
import Item from "../components/Item";

function ItemsList({products}) {
    return (
        <ul className="productList">
            {products.map(prod => <Item 
                key={prod.id}
                id={prod.id}
                name={prod.name}
                price={prod.price}
                stock={prod.stock}
                photo={prod.photo} /> ) }
        </ul>
    )
};

export default ItemsList