import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='app'>
      <Router>        
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Hero />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>
          <Route path='/product/:id' children={<ProductDetails />}></Route>
          {/* <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <About />
          </Route>
          <Route path='*'>
            <Error />
          </Route> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
