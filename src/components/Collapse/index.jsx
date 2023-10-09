import '../../utils/styles/style.css'
import {useState} from "react";
import NavigationIcon from '../../assets/images/arrow_back_ios-24px 2.svg'
import styled from "styled-components";


export default function Collapse({title, description,}){
    const [isRotate, setIsRotate] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const openCollapse = () => {
        setIsRotate(!isRotate)
        setIsOpen(!isOpen)
    };
    return(
        <div className="collapse">
            <div className="collapse__header">
                <span className="collapse__title">{title}</span>
                <button className={`collapse__open--btn ${isRotate ? 'animate' : ''}`} onClick={openCollapse}>
                    <img src={NavigationIcon} alt=""/>
                </button>
            </div>
            <div className={`collapse__body ${isOpen ? 'open-background': ''}`}>
                <p className={`collapse__description ${isOpen ? 'open-text': ''}`}>{description}</p>
            </div>
        </div>
    )
}