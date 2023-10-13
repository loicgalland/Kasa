import Ratings from "../Rating";
export default function HotelHost({name, picture, rating}){
    return(
        <div className="hotel__description--rigth">
            <div className="name-picture">
                <span className="host--name">{name}</span>
                <img src={picture} alt={name} className="host--picture"/>
            </div>
            <Ratings
                rating={rating}
            />
        </div>
    )
}