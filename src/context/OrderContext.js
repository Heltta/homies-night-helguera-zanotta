import { createContext, useContext, useState } from "react";

const OrderContext = createContext([]);

const useOrderContext = () => useContext(OrderContext);

function OrderContextProvider({children}){
    const [buyer, setBuyer] = useState({});
    const [buyerItems, setBuyerItems] = useState([]);
    const [order, setOrder] = useState({});

    const saveBuyer = ({name,phone,email}) =>{
        setBuyer({
            name:name,
            phone:phone,
            email:email,
        });
    }

    return(
        <OrderContext.Provider value={{
            buyer,
            buyerItems,
            order,
            saveBuyer,
            setBuyerItems,
            setOrder,
        }}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContextProvider
export {useOrderContext}
