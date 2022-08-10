import { createContext, useContext, useState } from "react";
import { useCartContext } from "./CartContext";

const OrderContext = createContext([]);

const useOrderContext = () => useContext(OrderContext);

function OrderContextProvider({children}){
    const [buyer, setBuyer] = useState(null);
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
    const isBuyerEmpty = () =>{
        return (buyer === null);
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
    const isBuyerItemsEmpty = ()=>{
        return (buyerItems.length === 0);
    }

    const buildOrder = () =>{
        setOrder({buyer, items: buyerItems, total:cartCost()});
        //sendOrder(order);
        return ({buyer, items: buyerItems,date:Date(), total:cartCost()})
    }
    const isOrderEmpty = () =>{
        return (order === null);
    }
    const resetOrder = () =>{
        setBuyer(null);
        setBuyerItems([]);
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
            isBuyerItemsEmpty,
            isBuyerEmpty,
        }}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContextProvider
export {useOrderContext}
