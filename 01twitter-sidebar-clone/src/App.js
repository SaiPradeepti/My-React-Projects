import React from 'react'
import {data} from './data'
import Tab from './Tab'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import FontAwesome from 'react-fontawesome'
import faStyles from 'font-awesome/css/font-awesome.css'

const App = () => {
  return (
    <div className="sidebar">
      <FontAwesome className="mainIcon" size="3x" name='twitter'/>
      {
        data.map((tabDetails) => {      
          return <Tab {...tabDetails}/>
        })
      }
    </div>
  )
}

export default App

