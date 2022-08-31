import { createStore } from 'redux'
import { DECREMENT, INCREMENT } from './actions'

const initialState = {
	likes: 1
}

const reducer = (state = initialState, action) => {
	console.log(action, 'reducer')
	switch (action.type) {
		case INCREMENT:
			return { ...state, likes: state.likes + 1 }
		case DECREMENT:
			return { ...state, likes: state.likes - 1 }
		default:
			return state
	}
}

const store = createStore(reducer)

export default store
