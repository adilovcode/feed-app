import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { OutlinedInput, InputAdornment, Box } from '@mui/material'
import { Icon } from '@iconify/react'
import { useDispatch } from 'react-redux'
import { searchPost } from '../../redux/actionCreators/postsActionCreators'

const SearchStyle = styled(OutlinedInput)(({ theme }) => {
	return {
		width: 240,
		borderRadius: 30,
		transition: theme.transitions.create(['box-shadow', 'width'], {
			easing: theme.transitions.easing.easeInOut,
			duration: theme.transitions.duration.shorter
		}),
		'&.Mui-focused': { width: 320, boxShadow: '0 1px 2px 0 0.24' },
		'& fieldset': {
			borderWidth: `1px !important`,
			borderColor: `${theme.palette.grey[500_32]} !important`
		}
	}
})

const SearchBox = () => {
	const [search, setSearch] = useState('')
	const dispatcher = useDispatch()

	const handleSearch = e => {
		setSearch(e.target.value)
	}

	useEffect(() => {
		let delayDebounceFn = null

		if (!search) {
			dispatcher(searchPost(search))
		} else {
			delayDebounceFn = setTimeout(() => {
				dispatcher(searchPost(search))
			}, 800)
		}

		return () => clearTimeout(delayDebounceFn)
	}, [search])

	return (
		<SearchStyle
			value={search}
			onChange={handleSearch}
			placeholder="Search user..."
			startAdornment={
				<InputAdornment position="start">
					<Box
						component={Icon}
						icon="bytesize:search"
						sx={{ color: 'text.disabled' }}
					/>
				</InputAdornment>
			}
		/>
	)
}

export default SearchBox
