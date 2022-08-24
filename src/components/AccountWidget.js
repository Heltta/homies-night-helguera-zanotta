import { useEffect, useState, useCallback } from 'react'
import profile from '../assets/images/profile.svg'
import { Link } from 'react-router-dom'

function AccountWidget(){
    const [openMenu, setOpenMenu] = useState(false);
    
    const  cerrar = useCallback( ()=> {
        setOpenMenu(false)
    },[]);

    useEffect(()=> {
        if(openMenu){
            window.addEventListener('click', cerrar)
        }
        else{
            window.removeEventListener('click', cerrar);
        }
    },[openMenu, cerrar])

    return(
        <>
            <Link id="UserProfile" to='/account/checkorder'>
                <img src={profile} alt="profile"/>
            </Link>
        </>
    )
}

export default AccountWidget
