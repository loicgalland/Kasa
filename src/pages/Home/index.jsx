import Banner from "../../components/Banner";
import Card from "../../components/Card";
import datas from '../../assets/datas/datas.json'
import './style.css'

export default function Home(){
    return(
        <div className="home__container">
            <Banner />
            <div className="cards__container">
                {datas.map((profile) =>(
                    <Card
                        idWeWant={profile.id}
                        key={profile.id}
                        imageSrc={profile.cover}
                        title={profile.title}
                    />
                ))}
            </div>
        </div>

    )
}