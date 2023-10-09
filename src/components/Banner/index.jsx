import '../../utils/styles/style.css'
import React from "react";

export default function Banner({ cover, title }){
    return(
        <div className="banner">
            <h1 className="banner__title">{title}</h1>
            <img src={cover} alt="Paysage côtier"/>
        </div>
    )
}