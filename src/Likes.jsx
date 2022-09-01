import React from 'react'
import { connect } from 'react-redux'
import { decrementLikes, incrementLikes } from './redux/actions'

const Likes = (props) => {
	console.log(props, 'props')
	return (
		<div className="button-controls">
			<button onClick={props.onIncrementLikes}>♥ {props.likes}</button>
			<button onClick={props.onDecrementLikes}>Dislike</button>
		</div>
	)
}

const mapStateToProps = (state) => {
	console.log(state, 'mapStateToProps')
	const { likesReducer } = state

	return {
		likes: likesReducer.likes
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrementLikes: () => {
			console.log('CLICK')
			dispatch(incrementLikes())
		},
		onDecrementLikes: () => {
			console.log('DECREMENT')
			dispatch(decrementLikes())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)
