import { createContext, useContext, useState } from "react";
import { useCartContext } from "./CartContext";

const OrderContext = createContext([]);

const useOrderContext = () => useContext(OrderContext);

function OrderContextProvider({children}){
    const [buyer, setBuyer] = useState({});
    const [buyerItems, setBuyerItems] = useState([]);
    const [order, setOrder] = useState(null);

    const {
        cartList,
        cartCost,
    } = useCartContext();

    const saveBuyer = ({name,phone,email}) =>{
        setBuyer({
            name:name,
            phone:phone,
            email:email,
        });
    }

    const saveBoughtItems = () =>{
        const items = [];
        cartList.forEach(item => {
            items.push({
                id:item.id,
                title:item.name,
                price:item.price,
                quantity:item.quantity,
            })
        });
        setBuyerItems(items);
    }

    const buildOrder = () =>{
        setOrder({buyer, items: buyerItems, total:cartCost()});
        //sendOrder(order);
        return
    }
    const isOrderEmpty = () =>{
        return (order === null);
    }
    const resetOrder = () =>{
        setOrder(null);
    }

    return(
        <OrderContext.Provider value={{
            buyer,
            buyerItems,
            order,
            saveBuyer,
            saveBoughtItems,
            buildOrder,
            isOrderEmpty,
            resetOrder,
        }}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContextProvider
export {useOrderContext}
