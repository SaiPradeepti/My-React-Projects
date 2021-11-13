import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa';

const url = 'https://randomuser.me/api/';

const defaultImage = 'https://randomuser.me/api/portraits/men/96.jpg';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [person,setPerson] = useState(null);
  const [value, setValue] = useState('random person')
  const [title, setTitle] = useState('name')

  const handleValue = (e) => {
    console.log(e.target);
  }

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img src={(person && person.image) || defaultImage} alt="random user" className='user-img'/>
          <p className='user-title'>My {title} is</p>
          <p className='user-value'>{value}</p>
        </div>
      </div>      
    </main>
  )
}

export default App
