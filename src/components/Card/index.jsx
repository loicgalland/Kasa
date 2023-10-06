import './style.css'
import {Link} from "react-router-dom";

export default function Card({title, imageSrc, idWeWant}){
    return(
        <div className="card">
            <Link to={`/hotel/:${idWeWant}`}>
                <img src={imageSrc} alt={title} className="card__img"/>
                <span className="card__title">{title}</span>
            </Link>
        </div>
    )
}