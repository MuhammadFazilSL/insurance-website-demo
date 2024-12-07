import React from 'react'
import './feedbackCards.css'
import personImg from '../../assets/home/person-img.png'
import commaImg from '../../assets/home/comma-img.png'
import starImg from '../../assets/home/star-img.png'

const FeedbackCards = () => {
    const cardDetails = [
        {
            content: "Lorem ipsum dolor sit amet, consectetur adipis elit. Nunc vulputate libero et velitLorem ipsum dolor sit amet,",
            name: "Arun KumarA.",
            image: personImg,
            place: "Chennai",
            ratings: 1
        },
        {
            content: "Lorem ipsum dolor sit amet, consectetur adipis elit. Nunc vulputate libero et velitLorem ipsum dolor sit amet,",
            name: "Arun KumarA.",
            image: personImg,
            place: "Chennai",
            ratings: 2
        },
        {
            content: "Lorem ipsum dolor sit amet, consectetur adipis elit. Nunc vulputate libero et velitLorem ipsum dolor sit amet,",
            name: "Arun KumarA.",
            image: personImg,
            place: "Chennai",
            ratings: 5
        },
        {
            content: "Lorem ipsum dolor sit amet, consectetur adipis elit. Nunc vulputate libero et velitLorem ipsum dolor sit amet,",
            name: "Arun KumarA.",
            image: personImg,
            place: "Chennai",
            ratings: 5
        },
        {
            content: "Lorem ipsum dolor sit amet, consectetur adipis elit. Nunc vulputate libero et velitLorem ipsum dolor sit amet,",
            name: "Arun KumarA.",
            image: personImg,
            place: "Chennai",
            ratings: 5
        },
    ]
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
                <img src={starImg} alt="" />
            ))
        )

    }
  return (
    <div className="feedbackCards-cards">
        {
            cardDetails.map((item,index)=>(
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
    </div>
  )
}

export default FeedbackCards