import '../../utils/styles/style.css'
import {useState} from "react";
import NavigationIcon from '../../assets/images/arrow_back_ios-24px 2.svg'

export default function Collapse({title, description}){
    //State pour savoir si la collapse est ouverte ou non
    const [isOpen, setIsOpen] = useState(false)

    //fonction qui ouvre ou ferme la collapse
    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    };
    return(
        <div className="collapse">
            <div className="collapse__title">
                {title}
                <button className={`btn-open-collapse ${isOpen ? 'btn-open-collapse--rotate' : ''}`} onClick={toggleCollapse}>
                    <img src={NavigationIcon} alt="navigationIcon"/>
                </button>
            </div>
            <div className={`collapse__description ${isOpen ? 'collapse__description--open' : ''}`}>
                <div>{description}</div>
            </div>
        </div>
    )
}