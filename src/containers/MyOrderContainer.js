import { useState } from "react";

import MyOrderForm from "../components/MyOrderForm";
import MyOrder from "../components/MyOrder";

function MyOrderContainer(){
    const [order, setOrder] = useState();

    
    return( 
        <>
            {(order)? 
                (<MyOrder order={order}/>)
                :
                <MyOrderForm setState={setOrder}/>
                }
        </>
    );
}

export default MyOrderContainer
