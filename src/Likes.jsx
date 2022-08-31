import React from 'react'
import { connect } from 'react-redux'

const Likes = (props) => {
	console.log(props, 'props')
	return (
		<div className="button-controls">
			<button>♥ {props.likes}</button>
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

export default connect(mapStateToProps)(Likes)
