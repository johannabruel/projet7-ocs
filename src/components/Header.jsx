import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg"

function Header(){
    return ( 
        <header className="header">
            <Link to="/">
                <img src={logo} alt="Logo Kasa" className="header__logo" />
            </Link>
            <nav className="header__nav"> 
                <ul>
                    <li><Link className="header__nav--link" to="/">Accueil</Link></li>
                    <li><Link className="header__nav--link" to="/about">A propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header