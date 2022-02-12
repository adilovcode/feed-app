import { ImageListItem, Stack } from '@mui/material'
import { Box } from '@mui/system'
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { getItem } from '../../redux/actions/postsActions'
import BasicModal from '../common/BasicModal'
import EllipsisTypography from '../common/EllipsisTypography'

// eslint-disable-next-line react/display-name
const ModalShowItem = forwardRef(({ ...props }, ref) => {
	const [visible, setVisible] = useState(false)
	const [item, setItem] = useState({})

	const handleClick = id => {
		setVisible(true)
		setItem(getItem(id))
	}

	const handleModalClose = () => {
		setVisible(false)
	}

	useImperativeHandle(ref, () => ({
		open: handleClick
	}))

	return (
		<BasicModal open={visible} handleClose={handleModalClose} {...props}>
			<ImageListItem
				component={Box}
				borderRadius={3}
				overflow="hidden"
				width="100%"
			>
				<img src={item.url} alt={item.title} loading="lazy" />
				<Stack spacing={1} style={{ minWidth: 0 }}>
					<EllipsisTypography
						variant="subtitle1"
						fontWeight="bold"
						noWrap
					>
						{item.title}
					</EllipsisTypography>
				</Stack>
			</ImageListItem>
		</BasicModal>
	)
})

export default ModalShowItem
