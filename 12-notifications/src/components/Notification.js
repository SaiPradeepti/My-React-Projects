import React,{ useState, useEffect } from 'react'
import {data} from '../data'
import {FaWindowClose} from 'react-icons/fa'

const Notification = () => {
    const [displayNotif, setDisplayNotif] = useState([]);

    useEffect(() => {

        // data.map(item => {

        // })
        
        const timer1 = setTimeout(()=>{
            setDisplayNotif((displayNotif)=>[...displayNotif,{displayID:1,display:true}]);
        }, 1000)
        const timer2 = setTimeout(()=>{
            setDisplayNotif((displayNotif)=>[...displayNotif,{displayID:2,display:true}]);
        }, 3000)
        const timer3 = setTimeout(()=>{
            setDisplayNotif((displayNotif)=>[...displayNotif,{displayID:3,display:true}]);
        }, 5000)
        
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        }
    }, [])

    const closeNotif = (id) => {
        setDisplayNotif((displayNotif)=>{
            const newDisplayNotif = displayNotif.map(displayNotifItem => {
                if(displayNotifItem.displayID === id){
                    return {
                        displayID: id,
                        display: false,
                    }
                }
                else
                    return displayNotifItem;
            })
            return newDisplayNotif;
        });
    }

    return (
        <div>            
            {
                data.map((item,index) => {
                    const {id,title,imgLink,link,timestamp} = item;
                     return (
                                displayNotif.map((displayNotifItem)=>{
                            const {displayID,display} = displayNotifItem;
                            if(id === displayID && display){
                                return (
                                    <div key={displayID} className={`container ${ (id === displayID && display) ? 'show' : 'hide'}`}>
                                        <a href={link} target='_blank' rel="noreferrer" key={index} className='notif'>
                                            <p className='notif__title'>{title}</p>
                                            <div className='notif__img'>
                                                <img src={imgLink} alt={title}/>
                                            </div>
                                        </a>
                                        <div className='close' onClick={() => closeNotif(displayID)}><FaWindowClose/></div>
                                    </div>
                                )
                            }
                        }) 
                     )                   
                })
            }
        </div>
    )
}

export default Notification