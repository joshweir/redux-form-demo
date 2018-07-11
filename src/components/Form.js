import React from 'react'
import PropTypes from 'prop-types'
import withLoader from './Loader'
import { Form1Page1 } from './forms'

const formComponents = {
  Form1Page1
}

const Form = props => {
  const { formComponent } = props
  const TheForm = withLoader(formComponents[formComponent])
  return <TheForm {...props} />
}

Form.propTypes = {
  currentPage: PropTypes.number,
  currentPageData: PropTypes.shape({}),
  formComponent: PropTypes.string
}

Form.defaultProps = {
  currentPage: null,
  currentPageData: {},
  formComponent: null
}

export default Form
