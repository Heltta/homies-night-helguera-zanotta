import { addDoc, collection, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";
const sendOrder = (order) =>{
    const db = getFirestore();
     const ordersColl = collection(db, "orders");

     addDoc(ordersColl,order).then((resp) =>{
        console.log(resp);
        Swal.fire({
            toast: true,
            title: 'Orden generada',
            icon: 'success',
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
          })
     })
}

export default sendOrder
