import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import Home from './views/Home'
import About from './views/About'
import Form1 from './views/Form1'
import Form2 from './views/Form2'
import NoMatch from './views/NoMatch'
import Wrapper from './components/Wrapper'
import Nav from './components/Nav'
import NavLink from './components/NavLink'
import logo from './logo.svg'
import SessionIdField from './containers/SessionIdField'

const title = 'Redux Form Demo'
const routes = [
  {
    title: 'Home',
    path: '/',
    component: Home,
    exact: true
  },
  {
    title: 'About',
    path: '/about',
    component: About
  },
  {
    title: 'Form 1',
    path: '/form-1',
    component: Form1
  },
  {
    title: 'Form 2',
    path: '/form-2',
    component: Form2
  }
]

const App = () => (
  <Router>
    <Wrapper>
      <Helmet titleTemplate={`%s | ${title}`} />
      <Nav>
        <img src={logo} alt="logo" />
        {routes.map((route, i) => <NavLink key={i} {...route} />)}
        <SessionIdField />
      </Nav>
      <Switch>
        {routes.map((route, i) => <Route key={i} {...route} />)}
        <Route component={NoMatch} />
      </Switch>
    </Wrapper>
  </Router>
)

export default App
