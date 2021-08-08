import React,{ useState, useEffect } from 'react'
import {data} from '../data'
import {FaWindowClose} from 'react-icons/fa'

const Notification = () => {
    const [displayNotif, setDisplayNotif] = useState([]);
    const [timerArr,setTimerArr] = useState([]);

    useEffect(() => {

        data.map((item,index) => {
            let interval = item.timestamp*1000 - Number(Date.now().toFixed(0));
            // console.log(item.timestamp*1000,Number(Date.now().toFixed(0)),interval*100);
            interval = 1000 * (index + 1);
            const timer = setTimeout(()=>{
            setDisplayNotif((displayNotif)=>[...displayNotif,{displayID:item.id,display:true}]);
        }, interval)
            timerArr.push(timer);
        })
        
        return () => {
            timerArr.map(timer => clearTimeout(timer))
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
                    const {id,title,imgLink,link} = item;
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