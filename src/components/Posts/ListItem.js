import React from 'react'
import { CardActionArea, ImageListItem, Stack } from '@mui/material'
import * as PropTypes from 'prop-types'
import { Box } from '@mui/system'
import EllipsisTypography from '../common/EllipsisTypography'

ListItem.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
}

export default function ListItem({ image, title, ...props }) {
	return (
		<CardActionArea {...props}>
			<ImageListItem
				component={Box}
				borderRadius={3}
				overflow="hidden"
				width="100%"
			>
				<img src={image} alt={title} loading="lazy" />
				<Stack spacing={1} style={{ minWidth: 0 }}>
					<EllipsisTypography
						variant="subtitle1"
						fontWeight="bold"
						noWrap
					>
						{title}
					</EllipsisTypography>
				</Stack>
			</ImageListItem>
		</CardActionArea>
	)
}
