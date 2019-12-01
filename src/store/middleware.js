import { setWeather } from './actions'

const fetchWeather = store => next => action => {
  console.log('dispatching', action)
  if (action.type !== 'GET_WEATHER') {
    return next(action)
  }

  fetch('/weather')
    .then(result => {
      store.dispatch(setWeather(result))
      next(action)
    })
}

export default fetchWeather