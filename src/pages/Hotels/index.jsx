import React from "react";
import hotels from '../../assets/datas/datas.json'
import {useParams} from "react-router-dom";
import Carousel from "../../components/Slideshow";
import HotelTitle from "../../components/HotelTitle";
import HotelHost from "../../components/HotelHost";
import Collapse from "../../components/Collapse";
import Tag from "../../components/Tag";

export default function Hotel() {
    //Récupération de l'hotel selectionné
    const { idHotel} = useParams()
    const idHotelSearch = idHotel.substring(1)
    const hotelSearch = hotels.find((hotel) => hotel.id == idHotelSearch)
    const hotelTag = hotelSearch.tags

    function ListEquipments(){
        return (
            <ul>
                {hotelSearch.equipments.map((equipment, index) => (
                    <li key={`${index}-${equipment}`}>{equipment}</li>
                ))}
            </ul>
        );
    }

    return (
        <div className="hotel__container">
            <Carousel />
            <div className="hotel__description">
                <HotelTitle
                    title={hotelSearch.title}
                    location={hotelSearch.location}
                    tags={hotelTag}
                />
                <HotelHost
                    name={hotelSearch.host.name}
                    picture={hotelSearch.host.picture}
                    rating={hotelSearch.rating}
                />
            </div>
            <div className="hotel__collapse">
                <Collapse
                    description={hotelSearch.description}
                    title="Description"
                />
                <Collapse
                    description={ListEquipments()}
                    title="Équipements"
                />
            </div>
        </div>
    );
}
