import React, {useState} from "react";
import PreviousIcon from '../../assets/images/arrow_back_ios-24px 2.svg'

export default function Carousel({ hotelSearch }){
    const hotelImages = hotelSearch.pictures
    const [currentIndex, setCurrentIndex] = useState(0)

    const slideStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '25px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage : `url(${hotelImages[currentIndex]})`,
    }
     const ImageSlider = ({slides}) => {
        function goToPreviousImage(){
            if(currentIndex < 1){
                setCurrentIndex(slides.length - 1)
            }else{
                setCurrentIndex(currentIndex - 1)
            }
        }
        function goToNextImage(){
            if(currentIndex >= slides.length - 1){
                setCurrentIndex(0)
            }else{
                setCurrentIndex(currentIndex + 1)
            }
        }


        return(
            <div className="slider">
                {slides?.length > 1 && (
                    <>
                        <div className="number">{currentIndex + 1}/{slides.length}</div>
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