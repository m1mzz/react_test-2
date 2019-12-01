const GET_WEATHER = 'GET_WEATHER'
const SET_WEATHER = 'SET_WEATHER'

export function actionGetWether () {
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