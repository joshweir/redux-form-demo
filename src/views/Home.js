import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import Page from '../components/Page'

export default () => (
  <Page>
    <h1>Redux Form Demo</h1>
    <div>
      Available forms:
      <ul>
        <li>
          <Link to="/form-1">Form 1</Link>
        </li>
        <li>
          <Link to="/form-2">Form 2</Link>
        </li>
      </ul>
    </div>
    <Helmet title="Home" />
  </Page>
)
