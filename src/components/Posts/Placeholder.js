import { Skeleton } from '@mui/material'
import React from 'react'
import { Grid } from '@mui/material'

function Placeholder() {
	return (
		<Grid container spacing={2}>
			{Array(10)
				.fill(1)
				.map((_, key) => (
					<Grid item sm={3} xs={6} md={3} key={key}>
						<Skeleton variant="rectangular" height={118} />
						<Skeleton variant="text" />
						<Skeleton variant="text" />
					</Grid>
				))}
		</Grid>
	)
}

export default Placeholder
