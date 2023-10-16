import React, {useEffect} from "react";
import hotels from '../../assets/datas/datas.json'
import {useNavigate, useParams} from "react-router-dom";
import Carousel from "../../components/Slideshow";
import HotelTitle from "../../components/HotelTitle";
import HotelHost from "../../components/HotelHost";
import Collapse from "../../components/Collapse";

export default function Hotel() {
    //Récupération de l'hotel selectionné
    const { idHotel } = useParams();
    const navigate = useNavigate();
    const idHotelSearch = idHotel.substring(1);
    const hotelSearch = hotels.find((hotel) => hotel.id === idHotelSearch);
    useEffect(() => {
        if (!hotelSearch) {
            //Redirection vers la page d'erreur si l'hotel n'est pas trouvé
            navigate('/error')
        }
    }, [hotelSearch]);

    //Empecher le navigateur de générer le composant si il hotelSearch n'existe pas
    if (!hotelSearch) {
        return null
    }
    const hotelTag = hotelSearch.tags;
    //Récupération des équipements de l'hotel sous forme de liste
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
