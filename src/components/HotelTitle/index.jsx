import Tag from "../Tag";
import React from "react";
export default function HotelTitle({title, location, tags}){
    return(
        <div className="hotel__description--left">
            <h2 className="hotel__title">{title}</h2>
            <h3 className="hotel__location">{location}</h3>
            <div className="tags__container">
                <!-- Map sur les tags pour créer autant de tags qu'il y en a dans la BD -->
                {tags.map((tag) =>(
                    <Tag
                        key={tag}
                        label={tag}
                    />
                ))}
            </div>
        </div>
    )
}