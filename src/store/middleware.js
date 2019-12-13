import actions from './actions'
import { GET_WEATHER, SET_SELECT } from './actions/actionsTypes'
import { appid, baseUrl } from '~/config/api'


const url = new URL(baseUrl)

const fetchWeather = store => next => action => {
  if ( ![GET_WEATHER, SET_SELECT].includes(action.type)) {
    return next(action)
  }
  next(action)
  
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
      }))
    })
    .catch(error => {
      store.dispatch(actions.setWeatherError(error.message))
    })
}

export default fetchWeather