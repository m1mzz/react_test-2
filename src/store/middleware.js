import actions from './actions'
import { GET_WEATHER } from './actions/actionsTypes'
import { appid, baseUrl } from '~/config/api'


const url = new URL(baseUrl)

const fetchWeather = store => next => action => {
  if (action.type !== GET_WEATHER) {
    return next(action)
  }
  store.dispatch(actions.setWeatherLoading())

  const { select } = store.getState()
  const country = select.selectedCounrty.value
  const temperature = select.selectedTemperature.value
  const getParams = {
    appid,
    q: country,
    units: temperature
  }
  url.search = new URLSearchParams(getParams).toString();

  fetch(url)
    .then(result => {
      result.json().then((data => {
        store.dispatch(actions.setWeather(data))
        next(action)
      }))
    })
    .catch(error => {
      store.dispatch(actions.setWeatherError(error.message))
    })
}

export default fetchWeather