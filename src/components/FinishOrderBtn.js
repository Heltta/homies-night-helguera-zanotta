import { useOrderContext } from "../context/OrderContext";

function FinishOrderBtn(){
    const {
        isOrderEmpty,
        buyer,
        buyerItems,
        order,
    } = useOrderContext();

    const finishHandler = () =>{
        console.log('finishHandler');
        console.log(buyer);
        console.log(buyerItems);
        console.log(order);
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
