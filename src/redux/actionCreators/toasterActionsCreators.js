import { HIDE_TOASTER, SHOW_TOASTER } from '../constants/toaster'

export const showToaster = values => ({
	type: SHOW_TOASTER,
	payload: {
		...values
	}
})

export const hideToaster = () => ({
	type: HIDE_TOASTER
})
