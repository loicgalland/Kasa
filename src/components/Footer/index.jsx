import LogoWhite from '../../assets/images/LOGO-white.svg'
import '../../utils/styles/style.css'
export default function Footer(){
    return(
        <footer>
            <img src={LogoWhite} alt="Kasa Logo Blanc"/>
            <div className="footer__text">
                <p>© 2020 Kasa.</p>
                <p>All rights reserved</p>
            </div>
        </footer>
    )
}