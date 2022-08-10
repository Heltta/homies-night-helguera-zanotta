import { addDoc, collection, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";

const sendOrder = (order) =>{
    const db = getFirestore();
    const ordersColl = collection(db, "orders");

    addDoc(ordersColl,order).then((resp) =>{
        console.log(order);
        console.log(resp);
        Swal.fire({
            title: 'Orden generada',
            icon: 'success',
            text: `Su id es ${resp.id}`,
            showConfirmButton: true,
            });
    });
}

export default sendOrder
