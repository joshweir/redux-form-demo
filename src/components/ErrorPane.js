const ErrorPane = props => {
  const { errorKey, renderOnError, children } = props
  const error = props[errorKey]
  return error ? renderOnError(props) : children
}

export default ErrorPane
