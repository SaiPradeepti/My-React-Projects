import React from 'react'
import List from './List'
import data from './data'

const App = () => {
  const minData = data.slice(0,3);
  const [people,setPeople] = React.useState(minData);
  const [showMore,setShowMore] = React.useState(false)

  const clickHandler = () => {
    setShowMore(!showMore);
    (showMore) ? setPeople(data.slice(0,3)) : setPeople(data);
  }

  return (
    <div className="container">
      <h2>Chat</h2>
      <p>{data.length} online</p>
      <div className="border"></div>
      <br/>
      <List people={people} />
      <button className="container__btn btn" onClick={clickHandler}>
        {
          (!showMore) ? 'Show more' : 'Show less'
        }        
      </button>
    </div>
  )
}

export default App

