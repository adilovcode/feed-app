import React from 'react'
import { Alert, Snackbar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { hideToaster } from '../redux/actionCreators/toasterActionsCreators'

const ToasterProvider = ({ children }) => {
	const toaster = useSelector(state => state.toasterReducer)

	const dispatcher = useDispatch()

	const handleClose = () => {
		dispatcher(hideToaster())
	}

	return (
		<div>
			<Snackbar
				open={toaster.isVisible}
				autoHideDuration={1000}
				onClose={handleClose}
				anchorOrigin={{
					vertical: toaster.vertical || 'top',
					horizontal: toaster.horizontal || 'right'
				}}
			>
				<Alert
					elevation={6}
					variant="filled"
					onClose={handleClose}
					severity={toaster.status || 'success'}
				>
					{toaster.message}
				</Alert>
			</Snackbar>
			{children}
		</div>
	)
}

export default ToasterProvider
