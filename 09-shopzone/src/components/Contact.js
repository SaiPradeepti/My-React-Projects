import React,{ useState } from 'react'
import { useGlobalContext} from './context'
import { contactData} from './data'

const Contact = () => {
    const { dispatch, msgSubmitted } = useGlobalContext();
    const [formInput, setFormInput] = useState({email:'',textarea:''});

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
                                <input type="text" value={formInput.email}  name="email" id="email" placeholder='Enter your email-id' required autoComplete='off' onChange={(e)=>setFormInput(()=>{
                                    return {
                                        ...formInput,
                                        email: e.target.value,
                                    }
                                })}/>
                            </div>
                            <div className="form-control">
                                <textarea value={formInput.textarea} className='textarea' placeholder='Type your message...' required onChange={(e)=>setFormInput(()=>{
                                    return {
                                        ...formInput,
                                        textarea: e.target.value,
                                    }
                                })}></textarea>
                            </div>
                            <button className='btn' onClick={()=>{
                                if(formInput.email && formInput.textarea)
                                    dispatch({type: 'msgSubmittedTrue'})
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
