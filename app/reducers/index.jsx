import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  level: require('./level').default
})

export default rootReducer
