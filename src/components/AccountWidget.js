import profile from '../assets/images/profile.svg'
import { Link } from 'react-router-dom'

function AccountWidget(){

    return(
        <>
            <Link id="UserProfile" to='/account/checkorder'>
                <img src={profile} alt="profile"/>
            </Link>
        </>
    )
}

export default AccountWidget
