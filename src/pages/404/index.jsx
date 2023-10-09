import '../../utils/styles/style.css'
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/styles/colors";

const ErrorLink = styled(Link)`
  color: ${colors.primaryRed};
  font-size: 18px;
`
export default function Error(){
    return(
        <div className="error__container">
            <span className="error__title">404</span>
            <span className="error__description">Oups! La page que vous demandez n'existe pas.</span>
            <ErrorLink to="/">Retourner sur la page d’accueil</ErrorLink>
        </div>
    )
}