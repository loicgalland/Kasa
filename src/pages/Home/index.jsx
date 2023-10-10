import Banner from "../../components/Banner";
import Card from "../../components/Card";
import hotels from '../../assets/datas/datas.json'
import '../../utils/styles/style.css'
import BannerHome from '../../assets/images/Banner/BannerImgHome.png'

export default function Home(){
    return(
        <div className="home__container">
            <Banner cover={BannerHome} title="Chez vous, partout et ailleurs"/>
            <div className="cards__container">
                {hotels.map((hotel) =>(
                    <Card
                        idWeWant={hotel.id}
                        key={hotel.id}
                        imageSrc={hotel.cover}
                        title={hotel.title}
                    />
                ))}
            </div>
        </div>

    )
}