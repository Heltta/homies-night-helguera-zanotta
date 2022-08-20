import { useEffect, useState } from "react";
import '../css/OrderForm.css'

import getOrder from "../helpers/getOrder";

function MyOrderContainer(){
    const [orderId, setOrderId] = useState('');
    const [order, setOrder] = useState();

    useEffect(()=>{
        console.log(`Mount or "order" change`);
        console.log(order);
    },[order]);
    
    return(
        <form onSubmit={getOrder(setOrder(), orderId)}>
            <label>
                Identificador de orden
                <input type="text" 
                    value={orderId} 
                    onChange={(event) => setOrderId(event.target.value)} />
            </label>

            <input type="submit" value="Submit" />
        </form>
    );
}

export default MyOrderContainer
