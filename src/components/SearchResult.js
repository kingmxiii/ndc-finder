import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'

const SearchResult = ({ results, searching, totalCount, loadMore }) => (
	<div className="row">
		<div className="container">
			<div className="infinite-container">
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
									alt="preview"
									src={r.images.fixed_height.url}
									className="mansory-img"
								/>
							</figure>
						))}
					</div>
				</InfiniteScroll>
			</div>
		</div>
	</div>
)

export default SearchResult
