import React from 'react'
import {data} from './data'
import Tab from './Tab'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter} from "@fortawesome/free-brands-svg-icons";

const App = () => {
  return (
    <div className="sidebar">
      <FontAwesomeIcon icon={faTwitter}/>
      {
        data.map((tabDetails) => {      
          return <Tab {...tabDetails}/>
        })
      }
    </div>
  )
}

export default App

