import { createStore } from 'redux'
import { emitterKeys } from '../emitterKeys'

const initialState = {
  title: "Old Title I'm about to be changed"
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case emitterKeys.ON_SET_TITLE:
      return { ...state, title: action.payload.title }
    default:
      return state
  }
}

const store = createStore(reducer)
export default store
