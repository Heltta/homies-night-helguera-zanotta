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
        <form onSubmit={
            (e)=>{
                e.preventDefault();
                if(orderId){
                    getOrder(
                        (fbData)=> {
                            setOrder(fbData);
                        },
                        orderId);
                }
                else{
                    (orderId === '' )? 
                        console.log('You must write an id')
                        :
                        console.log(`${orderId} is not a valid id`)
                        ;
                }
            }
        }>
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
