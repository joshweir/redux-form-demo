import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import formWizard from '../modules/formWizard/reducers'

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  routing,
  formWizard
})

export default rootReducer
