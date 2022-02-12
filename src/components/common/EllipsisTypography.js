import React from 'react'
import { Typography } from '@mui/material'

const ellipsis = {
	overFlow: 'hidden',
	whiteSpace: 'nowrap',
	textOverflow: 'ellipsis'
}

const EllipsisTypography = ({ children, ...props }) => (
	<Typography style={ellipsis} {...props}>
		{children}
	</Typography>
)

export default EllipsisTypography
