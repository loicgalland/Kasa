import hotels from '../../assets/datas/datas.json'
import React, {useState} from "react";
import {useParams} from "react-router-dom";
import PreviousIcon from '../../assets/images/arrow_back_ios-24px 2.svg'

export default function Carousel(){

    const { idHotel} = useParams()
    const idHotelSearch = idHotel.substring(1)
    const hotelSearch = hotels.find((hotel) => hotel.id == idHotelSearch)
    const hotelImages = hotelSearch.pictures
    const [currentIndex, setCurrentIndex] = useState(0)
     const ImageSlider = ({ slides }) => {
        function goToPreviousImage(){
            if(currentIndex < 1){
                setCurrentIndex(hotelImages.length - 1)
            }else{
                setCurrentIndex(currentIndex - 1)
            }
        }
        function goToNextImage(){
            if(currentIndex >= hotelImages.length - 1){
                setCurrentIndex(0)
            }else{
                setCurrentIndex(currentIndex + 1)
            }
        }

         const slideStyle = {
             width: '100%',
             height: '100%',
             borderRadius: '25px',
             backgroundPosition: 'center',
             backgroundSize: 'cover',
             backgroundImage : `url(${hotelImages[currentIndex]})`,
         }
        return(
            <div className="slider">
                {hotelImages?.length > 1 && (
                    <>
                        <div className="number">{currentIndex + 1}/{hotelImages.length}</div>
                        <div className="previous-icon" onClick={goToPreviousImage}><img src={PreviousIcon} alt=""/></div>
                        <div className="next-icon" onClick={goToNextImage}><img src={PreviousIcon} alt=""/></div>
                    </>
                )}
                <div style={slideStyle}></div>
            </div>
        )
     }

    return(
        <div className="carousel">
           <ImageSlider
            slides={hotelImages}
           />
        </div>
    )
}