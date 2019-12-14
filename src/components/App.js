import React, { Component } from 'react'
import SearchInput from './SearchInput'
import { fetchResults } from '../utilities/Helper'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchTerm: '',
			searching: false,
			page: 0,
			results: null
		}
	}

	onChange = searchTerm => {
		this.setState({
			searchTerm
		})
	}

	onSearch = searchTerm => {
		this.setState(
			{
				searching: true
			},
			() => {
				this.search()
			}
		)
	}

	search = async () => {
		const { searchTerm, page } = this.state
		let res = await fetchResults(searchTerm, page)
		if (res !== null) {
			this.setState({
				results: res.data.data,
				searching: false
			})
		}
	}

	render() {
		const { searchTerm } = this.state
		return (
			<div className="container-fluid">
				<SearchInput
					value={searchTerm}
					onSearch={this.onSearch}
					onChange={this.onChange}
				/>
			</div>
		)
	}
}

export default App
