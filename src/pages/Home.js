import { Grid, Pagination, PaginationItem, Stack } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListItem from '../components/Posts/ListItem'
import ModalShowItem from '../components/Posts/ModalShowItem'
import Placeholder from '../components/Posts/Placeholder'
import Main from '../containers/Main'
import { filter } from '../redux/actions/postsActions'
import { Icon } from '@iconify/react'
import {
	loadPosts,
	paginate
} from '../redux/actionCreators/postsActionCreators'

function Home() {
	const data = useSelector(state => state.postsReducer)

	const modal = useRef(null)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(loadPosts())
	}, [])

	const handleClick = id => {
		modal.current.open(id)
	}

	const handlePaginate = (e, newPage) => {
		dispatch(paginate(newPage))
	}

	return (
		<Main>
			{data.loading ? (
				<Placeholder />
			) : (
				<React.Fragment>
					<Grid container spacing={2}>
						{filter().map(item => (
							<Grid item sm={3} xs={6} md={3} key={item.id}>
								<ListItem
									onClick={() => handleClick(item.id)}
									title={item.title}
									image={item.thumbnailUrl}
								/>
							</Grid>
						))}
					</Grid>
					<Stack
						spacing={2}
						justifyContent="center"
						flexDirection="row"
						marginY={3}
					>
						<Pagination
							count={Number(
								(data.posts.length / data.perPage).toFixed()
							)}
							onChange={handlePaginate}
							renderItem={item => (
								<PaginationItem
									components={{
										previous: (
											<Icon icon="eva:arrow-ios-back-fill" />
										),
										next: (
											<Icon icon="eva:arrow-ios-forward-outline" />
										)
									}}
									{...item}
								/>
							)}
						/>
					</Stack>
					<ModalShowItem ref={modal} />
				</React.Fragment>
			)}
		</Main>
	)
}

export default Home
