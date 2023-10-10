import { NavLink, Link } from "react-router-dom";
import Logo from '../../assets/images/LOGO.svg'
import '../../utils/styles/style.css'

export default function Navbar(){
    return(
        <nav>
            <Link to="/">
                <img src={Logo} alt="Kasa Logo" className="navbar__img"/>
            </Link>
            <ul id='navbar'>
                <NavLink
                    to="/"
                    className={({ isActive, isPending })=> isPending ? "pending" : isActive ? "active" : ""
                    }
                >Accueil
                </NavLink>
                <NavLink to="/apropos">À Propos</NavLink>
            </ul>

        </nav>
    )
}