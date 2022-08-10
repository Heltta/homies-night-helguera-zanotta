import { useOrderContext } from "../context/OrderContext";

function CartMakeOrder(){

    const {
        saveBoughtItems,
        buildOrder,
    } = useOrderContext();

    const buildOrderList = () =>{
        saveBoughtItems();
        buildOrder();
        return
    }

    return(
        <button onClick={buildOrderList}>Armar orden</button>
    )
}

export default CartMakeOrder