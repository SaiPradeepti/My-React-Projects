import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";

const Modal = (props) => {
    const [closeModal,setCloseModal] = useState(false);
    const {id,title,image,year,description,genre} = props.item;
    
    if(props.item.id === props.overlay.id){
        return (
        <div>
            <div key={id+1} className={closeModal ? 'show-modalOverlay close' : 'show-modalOverlay'}></div>
            <div key={id} className={closeModal ? 'show-modal close' : 'show-modal'}>
                <div className="modal">
                    <div className="modal-ShowImage">
                        <img src={image} alt={title}/>
                    </div>
                    <div className="modal-ShowDetails">
                        <button className="modal-close" onClick={() => {setCloseModal(true)}}>
                            <AiOutlineClose />
                        </button>
                        <p style={{textAlign: 'center'}}>{title}</p>
                        <p>Plot: {description}</p>
                        <p>Genre: {genre}</p>
                        <p>Year: {year}</p>                        
                    </div>
                </div>
            </div>
        </div>
    )
    }
    else{
        return <></>
    }
}

export default Modal
