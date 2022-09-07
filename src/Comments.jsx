import React from 'react'

const Comments = (props) => {
	console.log(props, "COMMNETS")
	return (
		<div className="card-comments">
			<form className="comments-item-create">
				<input type="text" />
				<input type="submit" hidden />
			</form>
		</div>
	)
}

export default Comments
