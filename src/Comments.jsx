import React from 'react'
import SingleComment from './SingleComment'

const Comments = (props) => {
	console.log(props, 'COMMNETS')
	return (
		<div className="card-comments">
			<form className="comments-item-create">
				<input type="text" />
				<input type="submit" hidden />
			</form>
			<SingleComment />
		</div>
	)
}

export default Comments
