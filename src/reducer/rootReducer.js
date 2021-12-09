import { combineReducers } from 'redux'
import counter from './counterReducer'

/*
Si tenemos varios reducers podemos combinarlos en un root reducer

*/
export default combineReducers({
    counter
  })