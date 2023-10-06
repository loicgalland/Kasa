import './style.css'
import BannerImg from '../../assets/images/Banner/BannerImg.png'
export default function Banner(){
    return(
        <div className="banner">
            <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
            <img src={BannerImg} alt="Paysage côtier"/>
        </div>
    )
}