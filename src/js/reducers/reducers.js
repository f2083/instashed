import { combineReducers } from 'redux'
import {
  TOGGLE_SIDE,
  CHECK_EQUALITY,
  FIX_SLIDE,
  HIDE_ALL,
  VisibilityFilters
} from '../actions/actions'

var newState

function slideActions(state = [], action) {
  switch (action.type) {
    case TOGGLE_SIDE:
    	console.log('toggleSide received')
      newState = state.map(function(item, index){
        if (index === action.index) {
          return Object.assign({}, item, {
            turned: !item.turned
          })
        }
        return item
      })
      return newState
    case HIDE_ALL:
    	newState = state.map(function(item, index){
        if (item.turned) {
          return Object.assign({}, item, {
            turned: !item.turned
          })
        }
        return item
      })
      return newState
    case FIX_SLIDE:
      newState = state.map(function(item, index){
        if (action.index.indexOf(index)>=0) {
          return Object.assign({}, item, {
            fixed: true
          })
        }
        return item
      })
      return newState
    default:
      return state
  }
}

const slideGame = combineReducers({
  slideActions
})

export default slideGame
