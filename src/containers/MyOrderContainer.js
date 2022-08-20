import { useEffect, useState } from "react";

import MyOrderForm from "../components/MyOrderForm";
import MyOrder from "../components/MyOrder";

function MyOrderContainer(){
    const [order, setOrder] = useState();

    useEffect(()=>{
        //Placeholder useEffect function
        console.log(`Mount or "order" change`);
        console.log(order);
    },[order]);
    
    return( 
        <>
            <MyOrderForm setState={setOrder}/>
            {order && (<MyOrder order={order}/>)}
        </>
    );
}

export default MyOrderContainer
