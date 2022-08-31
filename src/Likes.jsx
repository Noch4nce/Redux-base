import React from 'react'

const Likes = (props) => {
	console.log(props, 'props')
	return (
		<div className="button-controls">
			<button>♥ {props.likes}</button>
			<button>Dislike</button>
		</div>
	)
}

export default Likes
