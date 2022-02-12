import React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import * as PropTypes from 'prop-types'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 360,
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4,
	borderRadius: 2
}

BasicModal.propTypes = {
	handleClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired
}

export default function BasicModal({ handleClose, open, children }) {
	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>{children}</Box>
			</Modal>
		</div>
	)
}
