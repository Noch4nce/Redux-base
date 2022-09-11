import React from 'react'
import Loader from 'react-loader-spinner'
import { useSelector } from 'react-redux'

const Spin = () => {
	const spinner = useSelector((state) => state.appReducer.loading)

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
				visible={spinner}
			/>
		</div>
	)
}

export default Spin
