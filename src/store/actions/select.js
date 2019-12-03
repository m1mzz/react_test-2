import { SET_SELECT } from './actionsTypes'


export function setSelect (data) {
  return {
    type: SET_SELECT,
    payload: data
  }
}