import MyOrderItem from "../components/MyOrderItem"
import { getItem } from "../helpers/getProducts"
import { memo } from "react";

const MyOrder = memo(({order}) => {

    return(
        <>
            <span>{`Identificador de orden: ${order.id}`}</span>
            <ul>
                {order.items.map(prod => <MyOrderItem  
                    key={prod.id} 
                    item={prod} />)}
            </ul>
            <span>{`Subtotal: $${order.total}`}</span>
        </>
    )
})

export default MyOrder
