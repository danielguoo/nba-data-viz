import {combineReducers} from 'redux'
import data from './data'
import visualization from './visualization'

const rootReducer = combineReducers({
  data,
  visualization
})

export default rootReducer