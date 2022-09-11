import React from 'react'
import Loader from 'react-loader-spinner'

const Spin = () => {
	return (
		<div className="loader-styles">
			<Loader
				type="TailSpin"
				height="80"
				width="80"
				color="#4fa94d"
				ariaLabel="tail-spin-loading"
				wrapperStyle={{}}
				wrapperClass=""
				visible={false}
			/>
		</div>
	)
}

export default Spin
