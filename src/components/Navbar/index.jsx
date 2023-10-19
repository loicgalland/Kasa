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
                <!-- Ajouter la class "active" au lien si il est actif-->
                <NavLink
                    to="/"
                    className={({ isActive})=> isActive ? "active" : ""
                    }
                >Accueil</NavLink>
                <NavLink to="/about">À Propos</NavLink>
            </ul>

        </nav>
    )
}