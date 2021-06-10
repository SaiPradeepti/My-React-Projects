import React from 'react'
import { useGlobalContext} from './context'
import { contactData} from './data'

const Contact = () => {
    const { dispatch, msgSubmitted } = useGlobalContext();

    return (
        <div className='contact'>
            <div className="contact__details">
                {
                    contactData.map(item => {
                        const {id,title,info,icon} = item;
                        return (
                            <section key={id} className='contact__info'>
                                <div className="contact__icon">{icon}</div>
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
                                <input type="text" name="email" id="email" placeholder='Enter your email-id' required autoComplete='off'/>
                            </div>
                            <div className="form-control">
                                <textarea className='textarea' placeholder='Type your message...' required></textarea>
                            </div>
                            <button className='btn' onClick={()=>dispatch({type: 'msgSubmittedTrue'})}>Submit</button>            
                        </>
                        )   
                    }
                </form>
            </div>
        </div>
    )
}

export default Contact
