import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { updateSessionId } from '../modules/formWizard/actions'
import { getSessionId } from '../modules/formWizard/selectors'

const SessionIdField = ({ sessionId, updateSessionId }) => (
  <TextField
    error={(sessionId || '').toString().length <= 0}
    id="sessionId"
    type="text"
    label="Session Id"
    placeholder="MyUniqueSession"
    onChange={e => updateSessionId(e.target.value)}
    value={sessionId}
    helperText="Unique string (no spaces) to represent a session"
  />
)

SessionIdField.propTypes = {
  sessionId: PropTypes.string,
  updateSessionId: PropTypes.func.isRequired
}

SessionIdField.defaultProps = {
  sessionId: ''
}

const mapStateToProps = state => ({
  sessionId: getSessionId(state)
})

export default connect(
  mapStateToProps,
  { updateSessionId }
)(SessionIdField)
