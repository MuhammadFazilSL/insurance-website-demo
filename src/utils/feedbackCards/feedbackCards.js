import React from 'react'
import './feedbackCards.css'
import commaImg from '../../assets/home/comma-img.png'
import starImg from '../../assets/home/star-img.png'
import arrowLeft from '../../assets/home/arrow-left.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeedbackCards = (props) => {
    const displayStars = (ratings) =>{
    const array = []
        console.log(ratings)
        for (let index = 0; index < ratings; index++) {
            console.log(index)
            array.push(index)
        }
        console.log(array)
        return(
            array.map(item => (
                <img src={starImg} alt="" key={item} />
            ))
        )

    }
 
  return (
    <Slider {...(props.settings)} ref={props.sliderRef} className="feedbackCards-cards">
        {
            props.cardDetails.map((item,index)=>(
                <span className={ index === 0 ? 'feedbackCards-card active' : 'feedbackCards-card'}>
                    <img src={commaImg} alt="" />
                    <p>{item.content}</p>
                    <div className="line"></div>
                    <span>
                        <img src={item.image} alt="" />
                        <span>
                            <span>
                                <h5>{item.name}</h5>
                                <p>{item.place}</p>
                            </span>
                              <span>
                              {
                                   displayStars(item.ratings)
                                }
                              </span>
                        </span>
                    </span>
                </span>
            ))
        }
        </Slider>
  )
}

export default FeedbackCards