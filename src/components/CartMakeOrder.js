import { useOrderContext } from "../context/OrderContext";

function CartMakeOrder(){

    const {
        saveBoughtItems,
    } = useOrderContext();

    const buildOrderList = () =>{
        saveBoughtItems();
        return
    }

    return(
        <button onClick={buildOrderList}>Armar orden</button>
    )
}

export default CartMakeOrder