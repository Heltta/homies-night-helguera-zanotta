import { 
    useState,
} from "react";
import Swal from "sweetalert2";
import { useOrderContext } from "../context/OrderContext";

function OrderForm(){
    const [email, setEmail] = useState('');
    const [emailCheck, setEmailCheck] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    
    const {
        buyer,
        saveBuyer,
    } = useOrderContext();
    
    const validMail = () => {
        return (emailCheck === email)
    }

    const handleSubmit = (event) => {
        if(validMail()){
            saveBuyer({
                name:name,
                phone:phone,
                email:email,
            });
            Swal.fire({
                toast: true,
                title: 'Datos ingresados',
                icon: 'success',
                position: 'top-end',
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
              })
            console.log(buyer);
        }else{
            Swal.fire({
                title: 'Error',
                text: 'Email no válido',
                icon: 'error',
                showConfirmButton: true,
            })
        }
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>

            <label>
            Nombre:
                <input 
                    type="text" 
                    value={name} 
                    onChange={(event) => setName(event.target.value)} />
            </label>

            <label>
            Teléfono:
                <input 
                    type="tel" 
                    value={phone} 
                    onChange={(event) => setPhone(event.target.value)} />
            </label>

            <label>
                Email:
                <input 
                    type="email" 
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)} />
            </label>

            <label>
                Validar Email:
                <input 
                    type="email"
                    value={emailCheck}
                    onChange={(event) => setEmailCheck(event.target.value)} />
            </label>

            <input type="submit" value="Submit" />
        </form>
    );
}

export default OrderForm
