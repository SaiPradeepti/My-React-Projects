import React, { useState, useEffect } from 'react'
import { people } from './data'

import './FontAwesomeIcons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'animate.css';

const Review = () => {
  
  const [index,setIndex] = useState(0);
  const [animate,setAnimate] = useState(false)
  // const { image, name, title, quote } = people[index];

  useEffect(() => {
    if(index < 0){
      setIndex(people.length -1)
    }
    if(index > people.length - 1){
      setIndex(0)
    }
  }, [index,people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index+1)
    },3000);
    return () => {
      clearInterval(slider)
    }
  }, [index])
  
  useEffect(() => {
    setAnimate(!animate)
  }, [index])

  return (
    <>
      {
        people.map((person,personIndex) => {
          const {id, image, name, title, quote } = person;
          let position = 'nextSlide';
          if(index === personIndex){
            position = 'activeSlide'
          }
          if(personIndex === index - 1 || (index === 0 && personIndex === people.length -1)){
            position = 'lastSlide'
          }
          return (
            <div key={id} className={`review ${position}`}>
                <div className="review__title">Our Reviews</div>
                <div className="reviewer__container">
                  <div className="image__container">
                      <img src={image} alt="" className={animate ? 'animate__animated animate__fadeIn' : ''}/>
                  </div>
                  <div className="reviewer">
                      <div className="reviewer__name">{name}</div>
                      <div className="reviewer__title">{title}</div>
                      <div className="review__quote">
                          <div className="quote-left">
                            <FontAwesomeIcon icon='quote-left' />
                          </div>
                          <div className="reviewer__quote">
                            {quote}
                          </div>
                          <div className="quote-right">
                            <FontAwesomeIcon icon='quote-right' />
                          </div>
                      </div>
                  </div>            
                </div>
                  <div className="btn__container">
                      <button className="prev__btn" onClick={() => setIndex(index-1)}>
                        <FontAwesomeIcon icon='arrow-left' />
                      </button>
                      <button className="next__btn" onClick={() => setIndex(index+1)}>
                        <FontAwesomeIcon icon='arrow-right' />                    
                      </button>
                  </div>
              </div>
          )
        })
      }
    </>
  )
}

export default Review