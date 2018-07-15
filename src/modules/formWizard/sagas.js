import { call, put, select, takeLatest } from 'redux-saga/effects'
import api from './api'
import {
  FETCH_FORM_DATA,
  UPDATE_SESSION_ID,
  fetchFormData,
  fetchFormDataSuccess,
  fetchFormDataFailure
} from './actions'
import { getFormSlug, getSessionId } from './selectors'

export function* handleFetchFormData({ payload: slug }) {
  try {
    const sessionId = yield select(state => getSessionId(state))
    if (sessionId) {
      const { data } = yield call(api().getFormData, { slug, sessionId })
      yield put(fetchFormDataSuccess(data))
    } else {
      yield put(
        fetchFormDataFailure({
          response: { statusText: 'Session Id is required' }
        })
      )
    }
  } catch (error) {
    yield put(fetchFormDataFailure(error))
  }
}

export function* handleUpdateSessionId({ payload: sessionId }) {
  try {
    const slug = yield select(state => getFormSlug(state))
    if (slug) {
      yield put(fetchFormData(slug))
    }
  } catch (error) {
    yield put(fetchFormDataFailure(error))
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_FORM_DATA, handleFetchFormData)
  yield takeLatest(UPDATE_SESSION_ID, handleUpdateSessionId)
}
