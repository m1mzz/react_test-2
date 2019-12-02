import { GET_WEATHER, SET_WEATHER } from '../actions/actionsTypes'

function reducers(state = {}, action) {
  switch (action.type) {
    case GET_WEATHER:
      return Object.assign({}, state, {
        test: action.type
      })
    case SET_WEATHER:
      return Object.assign({}, state, {
        weather: action.payload
      })
    default:
      return state
  }
}
export default reducers;