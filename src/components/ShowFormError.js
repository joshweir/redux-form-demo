import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const ShowFormError = ({ error }) => (
  <Paper elevation={1}>
    <Typography variant="headline" component="h3">
      Whoops, we had a problem fetching form data.
    </Typography>
    <Typography component="p">
      Please try again shortly, this was the error:
    </Typography>
    <Typography component="p">{error && error.response.statusText}</Typography>
  </Paper>
)

ShowFormError.propTypes = {
  error: PropTypes.shape({})
}

ShowFormError.defaultProps = {
  error: null
}

export default ShowFormError
