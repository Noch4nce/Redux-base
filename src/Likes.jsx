import React from 'react'
import { connect } from 'react-redux'

const Likes = (props) => {
	console.log(props, 'props')
	return (
		<div className="button-controls">
			<button onClick={props.onIncrementLikes}>♥ {props.likes}</button>
			<button>Dislike</button>
		</div>
	)
}

const mapStateToProps = (state) => {
	console.log(state, 'mapStateToProps')
	return {
		likes: state.likes
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrementLikes: () => {
			console.log('CLICK')
			const action = {
				type: 'INCREMENT'
			}

			dispatch(action)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)
