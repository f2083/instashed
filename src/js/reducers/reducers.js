import { combineReducers } from 'redux'
import {
  TOGGLE_SIDE,
  CHECK_EQUALITY,
  FIX_SIDE,
  HIDE_ALL,
  VisibilityFilters
} from '../actions/actions'

function slideActions(state = [], action) {
  switch (action.type) {
    case TOGGLE_SIDE:
    	console.log('toggleSide received')
      var newState = state.map(function(item, index){
        if (index === action.index) {
          return Object.assign({}, item, {
            turned: !item.turned
          })
        }
        return item
      })
      return newState
    case HIDE_ALL:
    	var newState = state.map(function(item, index){
        if (item.turned) {
          return Object.assign({}, item, {
            turned: !item.turned
          })
        }
        return item
      })
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
