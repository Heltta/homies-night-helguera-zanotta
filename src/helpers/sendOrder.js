import { addDoc, collection, getFirestore } from "firebase/firestore";

const sendOrder = (order) =>{
    const db = getFirestore();
     const ordersColl = collection(db, "orders");

     addDoc(ordersColl,order).then((resp) =>{
        console.log(resp);
     })
}

export default sendOrder
