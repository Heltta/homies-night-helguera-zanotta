import MyOrderItem from "../components/MyOrderItem"
import { getItem } from "../helpers/getProducts"

function MyOrder ({order}){

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
}

export default MyOrder
