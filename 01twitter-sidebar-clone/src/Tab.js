import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import FontAwesome from 'react-fontawesome'
// import faStyles from 'font-awesome/css/font-awesome.css'

const Tab = ({id,icon,tabName,url}) => {
    return (
        <div className="tab" key={id}>
            <FontAwesome className="tabIcon" name={icon} size="2x"/>
            <a href={url} className="link">
                <div className="linkName">
                    {tabName}
                </div>
            </a>
        </div>
    )
}

export default Tab

