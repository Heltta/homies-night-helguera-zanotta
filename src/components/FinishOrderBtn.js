import { useOrderContext } from "../context/OrderContext";
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

    const finishHandler = () =>{
        console.log('finishHandler');
        console.log(buyer);
        console.log(buyerItems);
        console.log(order);
        sendOrder(buildOrder());
        resetOrder();
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
