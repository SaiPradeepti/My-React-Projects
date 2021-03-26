import React from 'react'

const List = ({people}) => {
    return (
        <>
            {
                people.map(person => {
                    return (
                        <div key={person.id} className='item'>
                            <img src={person.image} alt=""/>
                            <p className="item__name name">{person.name}</p>
                            <div className="online"></div>
                        </div>
                    );
                })
            }
        </>
    )
}

export default List
