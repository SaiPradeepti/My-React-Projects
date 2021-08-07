import React,{ useState, useEffect } from 'react'
import {data} from '../data'

const Notification = () => {
    const [displayNotif, setDisplayNotif] = useState([{displayID:1,display:true},{displayID:2,display:true},{displayID:3,display:false}]);

    // useEffect(() => {
    //     setDisplayNotif(true);
    //     const timer = setTimeout(()=>{
            
    //     }, 1000)
        
    //     return () => {
    //         clearTimeout(timer);
    //     }
    // }, [])

    return (
        <div>            
            {
                data.map((item,index) => {
                    const {id,title,imgLink,link,timestamp} = item;
                    displayNotif.map((displayNotifItem)=>{
                        const {displayID,display} = displayNotifItem;
                        return (
                            <div key={displayID} className={`container ${ (id === displayID && display) ? 'show' : 'hide'}`}>
                                <a href={link} target='_blank' rel="noreferrer" key={index} className='notif'>
                                    <p className='notif__title'>{title}</p>
                                    <div className='notif__img'>
                                        <img src={imgLink} alt={title}/>
                                    </div>
                                </a> 
                            </div>
                        )
                    })                    
                })
            }
        </div>
    )
}

export default Notification