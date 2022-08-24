import MyOrderItem from "../components/MyOrderItem"
import { memo } from "react";

import "../css/MyOrder.css"

const MyOrder = memo(({order}) => {

    return(
        <section className="myOrder">
            <h2 className="orderID">{`Identificador de orden: `}<span>{`${order.id}`}</span></h2>
            <ul className="orderItems">
                {order.items.map(prod => <MyOrderItem
                    key={prod.id} 
                    item={prod} />)}
            </ul>
            <div className="orderTotal">{`Subtotal: `}<span>{`$${order.total}`}</span></div>
        </section>
    )
})

export default MyOrder
