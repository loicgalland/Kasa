import { Link } from "react-router-dom";
import Logo from '../../assets/images/LOGO.svg'
import './style.css'
import styled from "styled-components";
import colors from "../../utils/styles/colors";


const StyledLink = styled(Link)`
  color: ${colors.primaryRed};
  margin-left: 57px;
  text-decoration: none;
  font-size: 24px;
  &:hover{
    text-decoration: underline;
  }
  &:focus{
    text-decoration: underline;
  }
  @media screen and (max-width: 375px){
    font-size: 12px;
    margin-left: 26px;
    text-transform: uppercase;
    text-align: right;
  }
`

const ImageLink = styled(Link)`
    margin: 0;
`

export default function Navbar(){
    return(
        <nav>
            <ImageLink to="/">
                <img src={Logo} alt="Kasa Logo" className="navbar__img"/>
            </ImageLink>
            <ul>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/apropos">À Propos</StyledLink>
            </ul>

        </nav>
    )
}