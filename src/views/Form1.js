import React from 'react'
import Helmet from 'react-helmet'
import Page from '../components/Page'
import FormWizard from '../containers/FormWizard'

export default () => (
  <Page>
    <h1>Form 1</h1>
    <FormWizard slug="form-1" />
    <Helmet title="Form 1" />
  </Page>
)
