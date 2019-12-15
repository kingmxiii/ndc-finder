import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import Loadable from './Loadable'
import EmptyResult from './EmptyResult'

const SearchResult = ({
	results,
	searching,
	totalCount,
	loadMore,
	hasSearched
}) => (
	<div className="row">
		<div className="container">
			<div className="infinite-container">
				<Loadable loading={searching}>
					{results.length > 0 ? (
						<InfiniteScroll
							initialLoad={false}
							pageStart={0}
							loadMore={loadMore}
							hasMore={!searching && results.length < totalCount}
							useWindow={false}>
							<div className="mansory">
								{results.map(r => (
									<figure className="mansory-brick" key={r.id}>
										<img
											alt="preview"
											src={r.images.fixed_height.url}
											className="mansory-img"
										/>
									</figure>
								))}
							</div>
						</InfiniteScroll>
					) : (
						<EmptyResult hasSearched={hasSearched} />
					)}
				</Loadable>
			</div>
		</div>
	</div>
)

export default SearchResult
