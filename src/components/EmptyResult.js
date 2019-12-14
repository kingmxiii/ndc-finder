import React, { Fragment } from 'react'
import { Icon } from 'antd'

const EmptyResult = ({ hasSearched }) => {
	let iconStyle = { fontSize: '60px' }
	return (
		<div
			className="row justify-content-center align-items-center flex-column"
			style={{ height: '100%' }}>
			{hasSearched ? (
				<Fragment>
					<Icon type="inbox" style={iconStyle} />
					<span className="font-weight-bold mt-2">NO RESULTS</span>
					<span>Please try another search term.</span>
				</Fragment>
			) : (
				<Fragment>
					<Icon type="search" style={iconStyle} />
					<span className="font-weight-bold mt-2">SEARCH FOR GIFS</span>
					<span>Type something and hit enter</span>
					<span>to see some gifs.</span>
				</Fragment>
			)}
		</div>
	)
}

export default EmptyResult
