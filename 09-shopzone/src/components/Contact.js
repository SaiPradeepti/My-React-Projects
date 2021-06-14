import React,{ useState } from 'react'
import { useGlobalContext} from './context'
import { contactData} from './data'

const Contact = () => {
    const { dispatch, msgSubmitted, formInput } = useGlobalContext();
    // const [formInput, setFormInput] = useState({email:'',textarea:''});
    const [iconId,setIconId] = useState(0);

    return (
        <div className='contact'>
            <div className="contact__details">
                {
                    contactData.map(item => {
                        const {id,title,info,icon} = item;
                        return (
                            <section key={id} className='contact__info' onMouseOver={()=>setIconId(id)} onMouseOut={()=>setIconId(0)}>
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
                                <input type="text" value={formInput.email}  name="email" id="email" placeholder='Enter your email-id' required autoComplete='off' onChange={(e)=>dispatch({type: 'setFormInput',payload: {name: e.target.name, value: e.target.value}})}/>
                            </div>
                            <div className="form-control">
                                <textarea name='textarea' value={formInput.textarea} className='textarea' placeholder='Type your message...' required onChange={(e)=>dispatch({type: 'setFormInput',payload: {name: e.target.name, value: e.target.value}})}></textarea>
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
