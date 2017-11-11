import {combineReducers} from 'redux'
import individuals from './individuals'
import visualization from './visualization'

const rootReducer = combineReducers({
  individuals,
  visualization
})

export default rootReducer