import React from 'react'

const Users = ({users,displayindex}) => {
    const i = displayindex;

    const displayUsers = users.map((item,index) => {
        if(index >= (i*10) && index <= (parseInt(i)+1)*10-1)
            return item;
        else
        return null;
    })
    console.log(displayUsers)
    
    const viewProfile = () => {

    }
    
    return (
        <div className='cardContainer'>
            {
                displayUsers.map( (item,index) => {
                    if(item !== null){
                        const {avatar_url:image,login:name} = item;
                        return (
                            <div className="card" key={index}>
                                <img src={image} alt={name} className='card-image'/>
                                <h1 className='card-name'>{name}</h1>
                                <button onClick={viewProfile} className='card-btn'>view profile</button>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default Users
