import { 
  GET_WEATHER,
  SET_WEATHER,
  SET_WEATHER_LOADING,
  SET_WEATHER_ERROR
} from '../actions/actionsTypes'

const defaultState = {
  weather: null,
  isLoading: false,
  error: ''
}

function reducers(state = defaultState, action) {
  switch (action.type) {
    case GET_WEATHER:
      return { ...state, isLoading: false }

    case SET_WEATHER:
      return { ...state, weather: action.payload }

    case SET_WEATHER_LOADING:
      return { ...state, isLoading: true }

    case SET_WEATHER_ERROR:
      return { ...state, error: action.payload, isLoading: false }
      
    default:
      return state
  }
}
export default reducers;