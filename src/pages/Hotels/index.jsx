import React from "react";
import hotels from '../../assets/datas/datas.json'
import {useParams} from "react-router-dom";

export default function Hotel() {
    //Récupération de l'hotel selectionné
    const { idHotel} = useParams()
    const idHotelSearch = idHotel.substring(1)
    const hotelSearch = hotels.find((hotel) => hotel.id == idHotelSearch)


    return (
        <div>
            {hotelSearch.title}
        </div>
    );
}
