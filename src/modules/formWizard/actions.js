import { createActions } from 'redux-actions'

export const FETCH_FORM_DATA = 'FETCH_FORM_DATA'
export const FETCH_FORM_DATA_SUCCESS = 'FETCH_FORM_DATA_SUCCESS'
export const FETCH_FORM_DATA_FAILURE = 'FETCH_FORM_DATA_FAILURE'
export const UPDATE_SESSION_ID = 'UPDATE_SESSION_ID'

export const {
  fetchFormData,
  fetchFormDataSuccess,
  fetchFormDataFailure,
  updateSessionId
} = createActions(
  FETCH_FORM_DATA,
  FETCH_FORM_DATA_SUCCESS,
  FETCH_FORM_DATA_FAILURE,
  UPDATE_SESSION_ID
)
