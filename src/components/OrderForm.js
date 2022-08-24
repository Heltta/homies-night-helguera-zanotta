import { 
    useState,
} from "react";
import Swal from "sweetalert2";
import { useOrderContext } from "../context/OrderContext";
import '../css/OrderForm.css'

function OrderForm({children}){
    const [email, setEmail] = useState('');
    const [emailCheck, setEmailCheck] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const {
        saveBuyer,
    } = useOrderContext();

    
    const validMail = () => {
        return (email.length !== 0) && (emailCheck === email);
    }

    const validPhone = () => {
        return (phone.length !== 0) && !isNaN(phone);
    }

    const validName = () =>{
        return (name.length !== 0) && isNaN(name);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(validMail() && validPhone() && validName()){
            saveBuyer({
                name:name,
                phone:parseInt(phone),
                email:email,
            });
            Swal.fire({
                toast: true,
                title: 'Datos del usuario ingresados',
                icon: 'success',
                position: 'top-end',
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
              })
        }
        else if(!validName()){
            Swal.fire({
                title: 'Error',
                text: 'Nombre no válido',
                icon: 'error',
                showConfirmButton: true,
            })
        }
        else if(!validPhone()){
            Swal.fire({
                title: 'Error',
                text: 'Teléfono no válido',
                icon: 'error',
                showConfirmButton: true,
            })
        }
        else{
            Swal.fire({
                title: 'Error',
                text: 'Email no válido',
                icon: 'error',
                showConfirmButton: true,
            })
        }
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
            {children}
        </form>
    );
}

export default OrderForm
