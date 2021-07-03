 import React from 'react'
import Footer from '../components/Footer'
import { Container, Wrapper } from './style'
import { footerItems } from '../mock/footer'
import Navbar from '../components/Navbar'
import { navItems } from '../utils/navbar'
import Contact from '../views/Contact'


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

function Root() {
  return (
    <Container>
      <Router>
      <Navbar />
          <Switch>
              <Wrapper>
                  { footerItems.map(({ path, component }) => {
                      return <Route key={path} path={path} component={component} />
                    })
                  }
                  {navItems.map(({ child }) => {
                    return child.map(({ path, component }) => {
                      return <Route key={path} path={path} component={component} />
                    })
                  })}
                  <Route path='/contact' component={Contact} />
                  <Route exact path='/'>
                     <Redirect to='/main' />
                  </Route>
              </Wrapper>
          </Switch> 
         <Footer />
      </Router>
    </Container>
  )
}

export default Root

 
