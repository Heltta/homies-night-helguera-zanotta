import { useCartContext } from "../context/CartContext";
import sendOrder from "../helpers/sendOrder";

function CartMakeOrder(){
    
    const {
        cartList,
        cartCost,
    } = useCartContext();

    const buildOrderList = () =>{
        const buyer = {
            name:"Generic User",
            phone:"+012345678",
            email:"place_holder@mail.com",
        }
        const items = [];
        cartList.forEach(item => {
            items.push({id:item.id, title:item.name, price:item.price})
        });
        const order = {buyer, items, total:cartCost()};
        console.log(order);
        sendOrder(order);
        return
    }
    return(
        <button onClick={buildOrderList}>Armar orden</button>
    )
}

export default CartMakeOrder