import { handleActions } from 'redux-actions'

const initialState = {}

const formWizard = handleActions(
  {
    FETCH_FORM_DATA_SUCCESS: (state, { payload }) => payload
  },
  initialState
)

export default formWizard
