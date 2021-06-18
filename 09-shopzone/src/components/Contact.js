import React,{ useRef, useEffect} from 'react'
import { ACTIONS, useGlobalContext} from './context'
import { contactData} from './data'

const Contact = () => {
    const { dispatch, msgSubmitted, iconId, formInput } = useGlobalContext();
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <div className='contact'>
            <div className="contact__details">
                {
                    contactData.map(item => {
                        const {id,title,info,icon} = item;
                        return (
                            <section key={id} className='contact__info' onMouseOver={()=>dispatch({type: ACTIONS.SET_ICON_ID, payload: id})} onMouseOut={()=>dispatch({type: ACTIONS.SET_ICON_ID, payload: 0})}>
                                <div className={iconId === id ?"contact__icon icon-animate":"contact__icon"}>{icon}</div>
                                <div className="contact__title">{title}</div>
                                <div className="contact__inf">{info}</div>
                            </section>
                        )
                    })
                }
            </div>
            <div className="contact__form"> 
                <form className="form">
                    {
                        msgSubmitted && <p className='msg-submitted'>Thank you for contacting us. We will get back to you soon...</p>
                    }
                    {   !msgSubmitted &&(
                        <>
                            <div className="form-control">
                                <input type="text" value={formInput.email}  name="email" id="email" placeholder='Enter your email-id' required autoComplete='off' onChange={(e)=>dispatch({type: ACTIONS.SET_FORM_INPUT, payload: {name: e.target.name, value: e.target.value}})} ref={inputRef}/>
                            </div>
                            <div className="form-control">
                                <textarea name='textarea' value={formInput.textarea} className='textarea' placeholder='Type your message...' required onChange={(e)=>dispatch({type: ACTIONS.SET_FORM_INPUT, payload: {name: e.target.name, value: e.target.value}})}></textarea>
                            </div>
                            <button className='btn' onClick={()=>{
                                if(formInput.email && formInput.textarea)
                                    dispatch({type: ACTIONS.SET_MSG_SUBMITTED})
                            }}>Submit</button>            
                        </>
                        )   
                    }
                </form>
            </div>
        </div>
    )
}

export default Contact
