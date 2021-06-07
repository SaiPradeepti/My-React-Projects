import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='app'>
      <Router>        
        <Navbar />
        <Switch>
          <Route>
            <Hero />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
