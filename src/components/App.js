import React, { Component } from 'react'
import SearchInput from './SearchInput'
import SearchResult from './SearchResult'
import { fetchResults } from '../utilities/Helper'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchTerm: '',
			searching: false,
			page: 0,
			results: [],
			total_count: 0,
			hasSearched: false
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
				searching: true,
				results: [],
				page: 0
			},
			() => {
				this.search()
			}
		)
	}

	search = async () => {
		const { searchTerm, page, results } = this.state
		let res = await fetchResults(searchTerm, page)
		if (res !== null) {
			this.setState({
				results: [...results, ...res.data.data],
				searching: false,
				total_count: res.data.pagination.total_count,
				hasSearched: true
			})
		} else {
			this.setState({
				searching: false,
				hasSearched: true
			})
		}
	}

	loadMore = () => {
		const { page } = this.state
		let nextPage = page + 1
		this.setState(
			{
				page: nextPage,
				loadingMore: true
			},
			() => {
				this.search()
			}
		)
	}

	render() {
		const {
			searchTerm,
			results,
			searching,
			total_count,
			hasSearched
		} = this.state

		return (
			<div className="container-fluid">
				<SearchInput
					value={searchTerm}
					onSearch={this.onSearch}
					onChange={this.onChange}
				/>
				<SearchResult
					results={results}
					searching={searching}
					totalCount={total_count}
					loadMore={this.loadMore}
					hasSearched={hasSearched}
				/>
			</div>
		)
	}
}

export default App
