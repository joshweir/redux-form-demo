import { createActions } from 'redux-actions'

export const FETCH_FORM_DATA = 'FETCH_FORM_DATA'
export const FETCH_FORM_DATA_SUCCESS = 'FETCH_FORM_DATA_SUCCESS'
export const FETCH_FORM_DATA_FAILURE = 'FETCH_FORM_DATA_FAILURE'

export const {
  fetchFormData,
  fetchFormDataSuccess,
  fetchFormDataFailure
} = createActions(
  FETCH_FORM_DATA,
  FETCH_FORM_DATA_SUCCESS,
  FETCH_FORM_DATA_FAILURE
)
