import logoFooter from "../assets/images/logoFooter.svg"

function Footer(){
    return (
        <footer className="footer">
            
                <img src={logoFooter} alt="Logo Kasa" className="footer__logo" />
                <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
            
        </footer>
    )
}
export default Footer