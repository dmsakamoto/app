
import { FETCH_POLLS, RECEIVE_POLLS } from '../constants'

const initialState = { objects: [] }

export default function polls(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      let payload = action.payload
      return {
        ...state,
        objects: payload
      }
    default:
      return state
  }
}
