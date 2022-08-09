import { createContext, useContext, useState } from "react";

const OrderContext = createContext([]);

const useOrderContext = () => useContext(OrderContext);

function OrderContextProvider({children}){
    const [buyer, setBuyer] = useState([]);
    const [buyerItems, setBuyerItems] = useState([]);
    const [cartList, setCartList] = useState([]);

    return(
        <OrderContext.Provider value={{
            buyer,
            buyerItems,
            cartList,
            setBuyer,
            setBuyerItems,
            setCartList,
        }}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContextProvider
export {useOrderContext}
