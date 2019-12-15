import React, { Component, Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import SearchInput from './SearchInput'
import SearchResult from './SearchResult'
import { fetchResults } from '../utilities/Helper'

class App extends Component {
	constructor(props) {
		super(props)
		//Initialize application State
		this.state = {
			searchTerm: '',
			searching: false,
			page: 0,
			results: [],
			total_count: 0,
			hasSearched: false
		}
	}

	//Handler to manage the Value of SearchInput
	onChange = searchTerm => {
		this.setState({
			searchTerm
		})
	}

	//Handler that is called when user submit a search
	onSearch = searchTerm => {
		//When user submit the search, we set flags in the state and them we call the search function
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

	//Submit Search to Giphy Api
	search = async () => {
		const { searchTerm, page, results } = this.state

		//Make an Api request to Gyphi
		let res = await fetchResults(searchTerm, page)

		if (res !== null) {
			//If Valid Response, we add the data we get from the api to the state.
			//We also set the count, and unser the searching Flag
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

	//Infinity Scroller Handler
	loadMore = () => {
		const { page } = this.state
		//Set next  pagination Page or offset
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
			<Fragment>
				<Header />
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
				<Footer />
			</Fragment>
		)
	}
}

export default App
