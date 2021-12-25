import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
  FaUsers,
  FaEnvelope,
} from 'react-icons/fa';

const url = 'https://randomuser.me/api/';

const defaultImage = 'https://randomuser.me/api/portraits/men/96.jpg';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [person,setPerson] = useState(null);
  const [value, setValue] = useState('')
  const [title, setTitle] = useState('name')

  const getPerson = async () => {
    setLoading(true)
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];
    // const {email, phone} = person;
    // const {large:image} = person.picture;
    // const {login:password} = person;
    // const {dob:{age}} = person;
    // const {street:{number,name}} = person.location;
    // console.log(age);

    const { name: {first,  last}, dob: { age },email, phone,  picture: {large: image}, login:{password},location:{street:{number,name}}} = person;

    const newPerson = { name: `${first} ${last}`, age, email, phone,  image, password, number, street: `${number} ${name}`}

    setPerson(newPerson)
    setValue(newPerson.name)
    setLoading(false)
  }

  useEffect(() => {
    getPerson();
  },[])

  const handleValue = (e) => {
    e.preventDefault();
    
    if (e.target.classList.contains('icon')){
      const newValue = e.target.dataset.label; 
      setTitle(newValue);
      setValue(person[newValue]);
    }
  }

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container" style={{height: '60vh'}}>
          <img src={(person && person.image) || defaultImage} alt="random user" className='user-img'/>
          <p className='user-title'>My {title} is</p>
          <p className='user-value' style={{height: '50px'}}>{value}</p>
          <div className="values-list">
            <button className="icon" data-label='name' onMouseOver={handleValue}>
              <FaUser/>
            </button>
            <button className="icon" data-label='email' onMouseOver={handleValue}>
              <FaEnvelope/>
            </button>
            <button className="icon" data-label='age' onMouseOver={handleValue}>
              <FaCalendarTimes/>
            </button>
            <button className="icon" data-label='street' onMouseOver={handleValue}>
              <FaMap/>
            </button>
            <button className="icon" data-label='phone' onMouseOver={handleValue}>
              <FaPhone/>
            </button>
            <button className="icon" data-label='password' onMouseOver={handleValue}>
              <FaLock/>
            </button>
          </div>
          <button type='button' className='btn' onClick={getPerson}>
            { loading ? 'Loading....' : 'random user' }
          </button>
        </div>
      </div>      
    </main>
  )
}

export default App
