import React from "react"
import Item from "../components/Item";

function ItemsList({products}) {
    return (
        <section>
            <ul>
                {products.map(prod => <Item 
                    key={prod.id}
                    id={prod.id}
                    name={prod.name}
                    price={prod.price}
                    stock={prod.stock} /> ) }
            </ul>
        </section>
    )
};

export default ItemsList