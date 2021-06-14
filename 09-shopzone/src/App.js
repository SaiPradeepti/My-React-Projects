import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Hero from './components/Hero'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='app'>
      <Router>        
        <Navbar />
        <Cart />
        <Switch>
          <Route exact path='/'>
            <Hero />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>
          <Route path='/product/:id' children={<ProductDetails />}></Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
