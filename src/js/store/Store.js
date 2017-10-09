import { combineReducers, createStore} from 'redux'
import slideGame from '../reducers/reducers'
import initialState from '../store/initialState'

function mixState(array) {
	let newState = []
	array.forEach( item => {
		if(Math.round(Math.random()) === 0 ){
			newState.push(item)
			return
		}
		newState.unshift(item)
	})
	return newState
}

initialState.slideActions = mixState(initialState.slideActions);

const store = createStore(slideGame, initialState)

export default store