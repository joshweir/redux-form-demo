import React from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'
import ShowFormError from './ShowFormError'
import ErrorPane from './ErrorPane'
import Loader from './Loader'
import { Form1Page1 } from './forms'

const formComponents = {
  Form1Page1
}

const Form = props => {
  const { formComponent, error: formError } = props
  if (formComponents[formComponent]) {
    const TheForm = withFormik({
      mapPropsToValues: () => ({
        email: '',
        social: { facebook: '', twitter: '' }
      }),
      // Custom sync validation
      validate: values => {
        let errors = { social: {} }
        if (!values.email) {
          errors.email = 'Required'
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address'
        }
        return errors
      },
      handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 1000)
      },
      displayName: 'FormikForm'
    })(formComponents[formComponent])
    return (
      <Loader {...props}>
        <ErrorPane
          {...props}
          errorKey="error"
          renderOnError={({ error }) => <ShowFormError error={error} />}>
          <TheForm {...props} />
        </ErrorPane>
      </Loader>
    )
  }
  return <ShowFormError error={formError} />
}

Form.propTypes = {
  currentPage: PropTypes.number,
  currentPageData: PropTypes.shape({}),
  formComponent: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.shape({})
}

Form.defaultProps = {
  currentPage: null,
  currentPageData: {},
  formComponent: null,
  error: null
}

export default Form
