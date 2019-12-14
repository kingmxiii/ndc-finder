import React, { Component } from 'react'
import SearchInput from './SearchInput'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchTerm: '',
			searching: false
		}
	}

	onChange = searchTerm => {
		this.setState(
			{
				searchTerm
			},
			() => {
				console.log('Searching: ', this.state.searchTerm)
			}
		)
	}

	render() {
		const { searchTerm } = this.state
		return (
			<div className="container-fluid">
				<SearchInput value={searchTerm} onChange={this.onChange} />
			</div>
		)
	}
}

export default App
