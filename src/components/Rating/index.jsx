export default function Ratings({rating}){
    return(
        <div className="ratings">
            <i className={`fa-solid fa-star ${rating > 0 ? 'fa-orange' : ''}`}></i>
            <i className={`fa-solid fa-star ${rating > 1 ? 'fa-orange' : ''}`}></i>
            <i className={`fa-solid fa-star ${rating > 2 ? 'fa-orange' : ''}`}></i>
            <i className={`fa-solid fa-star ${rating > 3 ? 'fa-orange' : ''}`}></i>
            <i className={`fa-solid fa-star ${rating > 4 ? 'fa-orange' : ''}`}></i>
        </div>
    )
}