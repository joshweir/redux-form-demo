import { fork } from 'redux-saga/effects'
import formWizard from '../modules/formWizard/sagas'

export default function* rootSaga() {
  yield fork(formWizard)
}
