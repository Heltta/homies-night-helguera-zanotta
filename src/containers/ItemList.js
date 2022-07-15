import React from "react"
import Item from "../components/Item";

function ItemsList({products}) {
    return (
        <ul>
            {products.map(prod => <li key={prod.id}>{prod.name}</li> ) }
        </ul>
    )
};

export default ItemsList