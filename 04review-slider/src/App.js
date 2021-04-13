import React from 'react'
import './scss/App.scss';
import Review from './Review'

// import './FontAwesomeIcons/fa';

function App() {    
  return (
    <div className="container">
        <div className="container__overlay"></div>
        <Review />        
    </div>
  );
}

export default App;
