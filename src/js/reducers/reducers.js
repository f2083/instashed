import { combineReducers } from 'redux'
import {
  TOGGLE_SIDE,
  CHECK_EQUALITY,
  FIX_SIDE,
  VisibilityFilters
} from '../actions/actions'

function slideActions(state = [], action) {
  switch (action.type) {
    case TOGGLE_SIDE:
    	console.log('toggleSide received')
    	console.log(action)
    	let newState = state
    	newState[action.index].turned = !state[action.index].turned
      return newState
    case CHECK_EQUALITY:
      return state.map((item, index) => {
        if (index === action.index) {
          return Object.assign({}, item, {
            completed: !item.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

const slideGame = combineReducers({
  slideActions
})

export default slideGame
