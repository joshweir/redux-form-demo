import React from 'react'
import { ActivityIndicator } from 'react-native'
import hoistNonReactStatics from 'hoist-non-react-statics'
import PropTypes from 'prop-types'

const withLoader = WrappedComponent => {
  const NewComponent = props => {
    const { loading } = props
    return loading ? <ActivityIndicator /> : <WrappedComponent {...props} />
  }
  NewComponent.propTypes = {
    loading: PropTypes.bool
  }
  NewComponent.defaultProps = {
    loading: true
  }
  hoistNonReactStatics(NewComponent, WrappedComponent || {})
  return NewComponent
}

const Loader = props => {
  const { loading, children, render } = props
  if (loading) {
    return typeof render === 'function' ? render(props) : <ActivityIndicator />
  }
  return children
}
Loader.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  render: PropTypes.func
}
Loader.defaultProps = {
  loading: true,
  render: null
}

export default Loader
export { withLoader }
