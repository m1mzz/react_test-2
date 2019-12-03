import weather from './weather'
import select from './select'
import { combineReducers } from 'redux'

export default combineReducers({
  weather,
  select
})