import { CREATE_COMMENT } from './types'
import { errorOn } from './actions'

const badWords = ['fuck', 'slave']

export const spamFilter = (store) => {
	return function (next) {
		return function (action) {
			if (action.type === CREATE_COMMENT) {
				const hasBadWords = badWords.some((word) =>
					action.data.text.includes(word)
				)
				if (hasBadWords) {
					return store.dispatch(errorOn('Bad words'))
				}
			}
			return next(action)
		}
	}
}
