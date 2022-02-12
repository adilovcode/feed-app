import { combineReducers } from '@reduxjs/toolkit'
import postsReducer from './postsReducer'
import toasterReducer from './toasterReducer'

export default combineReducers({
	postsReducer,
	toasterReducer
})
