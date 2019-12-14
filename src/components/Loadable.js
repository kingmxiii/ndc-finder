import React, { Fragment } from 'react'
import RingLoader from 'react-spinners/RingLoader'

const Loadable = ({ loading, children }) => {
	return loading ? (
		<div
			className="row justify-content-center align-items-center flex-column"
			style={{ height: '100%' }}>
			<RingLoader loading={loading} size={60} color="#546e7a" />
			<span className="font-weight-bold mt-2">SEARCHING</span>
			<span>Wait a moment while we searching</span>
			<span>for your gifs.</span>
		</div>
	) : (
		<Fragment>{children}</Fragment>
	)
}

export default Loadable
