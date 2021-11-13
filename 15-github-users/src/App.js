import './App.scss';
import React,{ useState, useEffect} from 'react'

function App() {
  const [users,setUsers] = useState([]);
  const [loading,setLoading] = useState(true);

  const getData = async () => {
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    setUsers(data);
    setTimeout(()=>{setLoading(false)},2000);
  }

  useEffect(() => {
    getData();
  },[])

  if(loading){
    return (
    <div className="loadingContainer">
      <header className="loadingContainer__header">
        Loading...
      </header>
    </div>
  );
  }

  else{
    return (
    <div className="container">
      <header className="container__header">
        Github Users
      </header>
      <div className="users">
        {
          users.map( user => {
            const {id,login,avatar_url,html_url} = user;
            return (
              <div className="user" key={id}>
                <div className="user__image">
                  <img src={avatar_url} alt={login} className='image'/>
                </div>
                <div className="user__info">
                   <div className="name">{login}</div>
                   <div >
                     <a href={html_url} className="profile">profile</a>
                   </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
  }
}

export default App;
