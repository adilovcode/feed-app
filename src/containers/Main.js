import { Container } from '@mui/material'
import React from 'react'
import Header from '../components/Header/Header'

function Main({ children }) {
	return (
		<Container style={{ paddingTop: 10 }}>
			<Header />
			{children}
		</Container>
	)
}

export default Main
