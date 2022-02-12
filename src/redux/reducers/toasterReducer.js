import { HIDE_TOASTER, SHOW_TOASTER } from '../constants/toaster'

const initialState = {
	isVisible: false,
	message: '',
	status: '',
	vertical: '',
	horizontal: ''
}

const toasterReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_TOASTER:
			return { ...state, isVisible: true, ...action.payload }

		case HIDE_TOASTER:
			return { ...state, isVisible: false }

		default:
			return state
	}
}

export default toasterReducer
