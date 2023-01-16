import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg"

function Header(){
    return ( 
        <header className="header">
            <Link to="/">
                <img src={logo} alt="Logo Kasa" className="header__logo" />
            </Link>
            <nav className="header__nav"> 
                <ul>
                    <li>
                        <NavLink to="/" className={({isActive}) =>{
                        return isActive ? "header__navActive":"header__navIdle";
                        }}>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive}) =>{
                        return isActive ? "header__navActive":"header__navIdle";
                        }}>A propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header