import { memo } from "react";
import {Link} from 'react-router-dom'

const NavBarCategoriesList = memo( ({categories}) => {
    return (
        <nav>
            <ul>
            {categories.map(category => 
                <li key={category.id} >
                    <Link to={`/category/${category.filter}`} >{category.name}</Link>
                </li> ) }
            </ul>
        </nav>
    )
})

export default NavBarCategoriesList
