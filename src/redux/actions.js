import { DECREMENT, INCREMENT } from './types'

export const incrementLikes = () => {
	return {
		type: INCREMENT
	}
}

export const decrementLikes = () => {
	return {
		type: DECREMENT
	}
}
