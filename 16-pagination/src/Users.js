import React from 'react'

const Users = ({data,displayindex,loading}) => {
    const i = displayindex;
    const users = data.map((item,index) => {
        if(index >= (i*10) && index <= (parseInt(i)+1)*10-1)
            return item;
        else
        return null;
    })

    if(loading){
    return <div className='loading'><h1>Loading...</h1></div>
  }
    
    return (
        <div className='cardContainer'>
            {
                users.map( (item,index) => {
                    if(item !== null){
                        const {avatar_url:image,login:name,html_url:profile} = item;
                        return (
                            <div className="card" key={index}>
                                <img src={image} alt={name} className='card-image'/>
                                <h1 className='card-name'>{name}</h1>
                                <button className='card-btn'>
                                    <a href={profile} target='_blank' rel="noreferrer">view profile</a></button>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default Users
