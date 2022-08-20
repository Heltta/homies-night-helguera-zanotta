import { useEffect, useState } from "react";

import MyOrderForm from "../components/MyOrderForm";

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
        </>
    );
}

export default MyOrderContainer
