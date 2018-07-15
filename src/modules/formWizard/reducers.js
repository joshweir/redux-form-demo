import { handleActions } from 'redux-actions'

const initialState = {}

const formWizard = handleActions(
  {
    FETCH_FORM_DATA: (state, { payload }) => ({
      ...state,
      formName: payload,
      loading: true
    }),
    FETCH_FORM_DATA_SUCCESS: (state, { payload }) => ({
      ...state,
      ...payload,
      error: null,
      loading: false
    }),
    FETCH_FORM_DATA_FAILURE: (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false
    }),
    UPDATE_SESSION_ID: (state, { payload }) => ({
      ...state,
      sessionId: payload
    })
  },
  initialState
)

export default formWizard
