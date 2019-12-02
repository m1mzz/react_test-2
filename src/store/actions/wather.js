import { GET_WEATHER, SET_WEATHER } from './actionsTypes'

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