import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import Loadable from './Loadable'

const SearchResult = ({ results, searching, totalCount, loadMore }) => (
	<div className="row">
		<div className="container">
			<div className="infinite-container">
				<Loadable loading={searching}>
					<InfiniteScroll
						initialLoad={false}
						pageStart={0}
						loadMore={loadMore}
						hasMore={!searching && results.length < totalCount}
						useWindow={false}>
						<div className="mansory">
							{results.map(r => (
								<figure className="mansory-brick">
									<img
										key={r.id}
										alt="preview"
										src={r.images.fixed_height.url}
										className="mansory-img"
									/>
								</figure>
							))}
						</div>
					</InfiniteScroll>
				</Loadable>
			</div>
		</div>
	</div>
)

export default SearchResult
