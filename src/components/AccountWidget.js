import { useEffect, useState, useCallback } from 'react'
import profile from '../assets/images/profile.svg'
import AccountPopUp from './AccountPopUp';

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
            <button id="UserProfile" onClick={(e)=>{
                e.stopPropagation();
                setOpenMenu(true);
                }}>
                <img src={profile} alt="profile"/>
            </button>
            {(openMenu) && (<AccountPopUp/>)}
        </>
    )
}

export default AccountWidget
