import { useParams } from "react-router-dom"

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
            <section>
                Ver orden
            </section>
        )
    }
}

export default AccountContainer