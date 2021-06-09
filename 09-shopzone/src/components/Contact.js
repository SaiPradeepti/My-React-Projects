import React from 'react'
import svg from "./contactUs.svg";
import { useGlobalContext} from './context'

const Contact = () => {
    const { dispatch, msgSubmitted } = useGlobalContext();

    return (
        <div className='contact'>
            <div className="contact__svg">
                <img src={svg} alt="img" />
            </div>
            <div className="contact__form">
                {
                    msgSubmitted && <h1 className='msg-submitted'>Thank you for contacting us. We will get back to you soon...</h1>
                }
                {   !msgSubmitted &&(
                        <form className="form">
                            <div className="form-control">
                                <input type="text" name="email" id="email" placeholder='Enter your email-id' required autoComplete='off'/>
                            </div>
                            <div className="form-control">
                                <textarea className='textarea' required></textarea>
                            </div>
                            <button className='btn' onClick={()=>dispatch({type: 'msgSubmittedTrue'})}>Submit</button>
                        </form>
                    )
                }
            </div>
        </div>
    )
}

export default Contact
