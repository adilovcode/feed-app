import { FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPerPage } from '../../redux/actionCreators/postsActionCreators'
import SearchBox from '../common/SearchBox'

function Header() {
	const perPage = useSelector(state => state.postsReducer.perPage)

	const dispatch = useDispatch()

	const handleSelectChange = e => {
		dispatch(setPerPage(e.target.value))
	}

	return (
		<Stack flexDirection="row" justifyContent="space-between" marginY={1}>
			<SearchBox />
			<FormControl sx={{ m: 1, minWidth: 120 }}>
				<InputLabel id="demo-simple-select-label">Show</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={perPage}
					label="Age"
					onChange={handleSelectChange}
				>
					<MenuItem value={10}>10</MenuItem>
					<MenuItem value={20}>20</MenuItem>
					<MenuItem value={30}>50</MenuItem>
				</Select>
			</FormControl>
		</Stack>
	)
}

export default Header
