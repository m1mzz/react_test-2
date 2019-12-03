import { SET_SELECT } from '../actions/actionsTypes';
import cities from '~/config/cities';
import temperatureValue from '~/config/temperature';

const defaultState = {
  selectedCounrty: cities[0],
  selectedTemperature: temperatureValue[0],
}

function reducers(state = defaultState, action) {
  switch (action.type) {
    case SET_SELECT:
      const newState = { ...state }
      const { key, value } = action.payload
      newState[key] = value
      return newState
    default:
      return state
  }
}
export default reducers;