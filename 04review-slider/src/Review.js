import React, { useState } from 'react'
import { people } from './data'

import './FontAwesomeIcons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Review = () => {
  
  const [index,setIndex] = useState(0);
  const { image, name, title, quote } = people[index];

  const prevPerson = () => {
      let newIndex;
      setIndex((index) => {
        newIndex = index - 1;
        if(newIndex < 0)
          newIndex = people.length - 1;          
        return newIndex;
      });
  }
  const nextPerson = () => {
      let newIndex;
      setIndex((index) => {
        newIndex = index + 1;
        if(newIndex > people.length - 1)
          newIndex = 0;
        return newIndex;
      });
  }
  
    return (
        <div className="review">
          <div className="review__title">Our Reviews</div>
            <div className="image__container">
                <img src={image} alt="" />
            </div>
            <div className="reviewer">
                <div className="reviewer__name">{name}</div>
                <div className="reviewer__title">{title}</div>
                <div className="review__quote">
                    <div className="quote-left">
                      <FontAwesomeIcon icon='quote-left' />
                    </div>
                    <div className="reviewer__quote animate__animated animate__bounce">
                      {quote}
                    </div>
                    <div className="quote-right">
                      <FontAwesomeIcon icon='quote-right' />
                    </div>
                </div>
            </div>
            <div className="btn__container">
                <button className="prev__btn" onClick={prevPerson}>
                  <FontAwesomeIcon icon='arrow-left' />
                </button>
                <button className="next__btn">
                  <FontAwesomeIcon icon='arrow-right' onClick={nextPerson}/>                    
                </button>
            </div>
        </div>
    )
}

export default Review