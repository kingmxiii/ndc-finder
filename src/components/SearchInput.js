import React from 'react'

const SearchInput = ({ value, onChange }) => (
	<div className="row">
		<h1 className="text-center">NDC Finder</h1>
		<div className="input-group mb-3">
			<input
				type="text"
				className="form-control"
				placeholder="Search"
				value={value}
				onChange={e => onChange(e.target.value)}
			/>
		</div>
	</div>
)

export default SearchInput
