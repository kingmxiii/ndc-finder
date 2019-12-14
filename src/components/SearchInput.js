import React from 'react'
import { Input } from 'antd'

const { Search } = Input

const SearchInput = ({ value, onSearch, onChange }) => (
	<div className="row">
		<div className="container">
			<h1 className="text-center">NDC Finder</h1>
			<div>
				<Search
					type="text"
					placeholder="Search"
					value={value}
					onSearch={onSearch}
					onChange={e => onChange(e.target.value)}
				/>
			</div>
		</div>
	</div>
)

export default SearchInput
