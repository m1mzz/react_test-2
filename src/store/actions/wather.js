import { GET_WEATHER, SET_WEATHER, SET_WEATHER_LOADING, SET_WEATHER_ERROR } from './actionsTypes'

export function getWether () {
  return {
    type: GET_WEATHER
  }
}

export function setWeather (data) {
  return {
    type: SET_WEATHER,
    payload: data
  }
}

export function setWeatherLoading () {
  return {
    type: SET_WEATHER_LOADING
  }
}

export function setWeatherError (data) {
  return {
    type: SET_WEATHER_ERROR,
    payload: data
  }
}