import { useOrderContext } from "../context/OrderContext";
import { useCartContext } from "../context/CartContext";
import sendOrder from "../helpers/sendOrder"

function FinishOrderBtn(){
    const {
        isOrderEmpty,
        buildOrder,
        resetOrder,
    } = useOrderContext();
    const {
        clearCart,
    } = useCartContext();
    

    const finishHandler = () =>{
        sendOrder(buildOrder());
        resetOrder();
        clearCart();
    }

    if(isOrderEmpty()){
        return(
            <button className="finishOrderBtn" onClick={finishHandler}>
                Realizar compra
            </button>
        );
    }else{
        return(<div>Orden no Vacía</div>);
    };
}

export default FinishOrderBtn
