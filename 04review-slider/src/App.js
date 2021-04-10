import React from 'react'
import './App.scss';

import './FontAwesomeIcons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div className="container">
        <div className="container__overlay"></div>
        <div className="review">
            <div className="image__container">
                <img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg" alt="" />
            </div>
            <div className="reviewer">
                <div className="reviewer__name">maria ferguson</div>
                <div className="reviewer__title">office manager</div>
                <div className="review__quote">
                    <div className="quote-left">
                        <FontAwesomeIcon icon='quote-left' />
                    </div>
                    <div className="reviewer__quote">
                      Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.
                    </div>
                    <div className="quote-right">
                        <FontAwesomeIcon icon='quote-right' />
                    </div>
                </div>
            </div>
            <div className="btn__container">
                <button className="prev__btn">
                  <FontAwesomeIcon icon='arrow-left' />
                </button>
                <button className="next__btn">
                    <FontAwesomeIcon icon='arrow-right' />                    
                </button>
            </div>
        </div>
    </div>
  );
}

export default App;
