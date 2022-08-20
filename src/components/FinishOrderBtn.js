import { useOrderContext } from "../context/OrderContext";
import { useCartContext } from "../context/CartContext";
import sendOrder from "../helpers/sendOrder"

function FinishOrderBtn(){
    const {
        isOrderEmpty,
        buyer,
        buyerItems,
        order,
        buildOrder,
        resetOrder,
    } = useOrderContext();
    const {
        clearCart,
    } = useCartContext();
    

    const finishHandler = () =>{
        console.log('finishHandler');
        console.log(buyer);
        console.log(buyerItems);
        console.log(order);
        sendOrder(buildOrder());
        resetOrder();
        clearCart();
    }

    if(isOrderEmpty()){
        return(
            <button onClick={finishHandler}>Completar compra</button>
        );
    }else{
        return(<div>Orden no Vacía</div>);
    };
}

export default FinishOrderBtn