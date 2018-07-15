import React from 'react'
import PropTypes from 'prop-types'
import { Field, Form } from 'formik'
import TextField from '@material-ui/core/TextField'

const Form1Page1 = ({
  errors,
  touched,
  isSubmitting,
  handleBlur,
  handleChange,
  values
}) => (
  <Form>
    <TextField
      error={errors.email && touched.email}
      id="email"
      type="email"
      label="Email"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.email}
      helperText={errors.email && touched.email && errors.email}
      margin="normal"
    />
    <label htmlFor="social.facebook">Facebook</label>
    <Field type="text" name="social.facebook" />
    {errors.social &&
      errors.social.facebook &&
      touched.social &&
      touched.social.facebook && <div>{errors.social.facebook}</div>}
    <label htmlFor="social.facebook">Twitter</label>
    <Field type="text" name="social.twitter" />
    {errors.social &&
      errors.social.twitter &&
      touched.social &&
      touched.social.twitter && <div>{errors.social.twitter}</div>}
  </Form>
)
/*
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
*/
export default Form1Page1
