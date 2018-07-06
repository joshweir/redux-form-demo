import { call, put, takeLatest } from 'redux-saga/effects'
import api from './api'
import {
  FETCH_FORM_DATA,
  fetchFormDataSuccess,
  fetchFormDataFailure
} from './actions'

export function* handleFetchFormData({ payload: slug }) {
  try {
    const { data } = yield call(api().getFormData, { slug })
    yield put(fetchFormDataSuccess(data))
  } catch (error) {
    yield put(fetchFormDataFailure(error))
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_FORM_DATA, handleFetchFormData)
}
