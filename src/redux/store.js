import { createStore } from 'redux'

const initialState = {
	likes: 1
}

const reducer = (state = initialState, action) => {
	console.log(action, "reducer")

	return state
}

const store = createStore(reducer)

export default store