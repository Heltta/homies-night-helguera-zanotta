import { useParams } from "react-router-dom"

import MyOrderContainer from "./MyOrderContainer";

function AccountContainer (){
    const { id } = useParams();
    if(id === 'signin'){
        return(
            <section>
                Iniciar sesión
            </section>
        );
    }
    else if (id === 'register'){
        return(
            <section>
                Registrarse
            </section>
        );
    }
    else{
        //id is equal to 'checkorder'
        return(
            <>
                <MyOrderContainer/>
            </>
        )
    }
}

export default AccountContainer
