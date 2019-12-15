import React from 'react'
import { Input } from 'antd'

const { Search } = Input

const SearchInput = ({ value, onSearch, onChange }) => (
	<div className="row mb-5">
		<div className="container">
			<h1 className="text-center">NDC Finder</h1>
			<div>
				<Search
					type="text"
					placeholder="Search"
					value={value}
					onSearch={val => {
						if (val && val !== '') {
							onSearch(val)
						}
					}}
					onChange={e => onChange(e.target.value)}
				/>
			</div>
		</div>
	</div>
)

export default SearchInput
