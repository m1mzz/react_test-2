import actions from './actions'
import { GET_WEATHER } from './actions/actionsTypes'


const fetchWeather = store => next => action => {
  console.log('dispatching', action)
  if (action.type !== GET_WEATHER) {
    return next(action)
  }

  fetch('https://openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22')
    .then(result => {
      result.json().then((data => {
        store.dispatch(actions.setWeather(data))
        next(action)
      }))
      
    })
}

export default fetchWeather