import {
	GET_POSTS,
	LOAD_POSTS,
	SEARCH_POST,
	SET_PAGE,
	SET_PER_PAGE
} from '../constants/postsTypes'

const initialParams = {
	posts: [],
	search: '',
	perPage: 10,
	page: 1,
	loading: false
}

const postsReducer = (state = initialParams, action) => {
	console.log(action)
	switch (action.type) {
		case GET_POSTS:
			return {
				...state,
				posts: action.payload.posts,
				loading: action.payload.loading
			}
		case LOAD_POSTS:
			return {
				...state,
				loading: action.payload.loading
			}
		case SET_PER_PAGE:
			return {
				...state,
				perPage: action.payload.perPage
			}

		case SEARCH_POST:
			return {
				...state,
				search: action.payload.search
			}

		case SET_PAGE:
			return {
				...state,
				page: action.payload.page
			}

		default:
			return state
	}
}

export default postsReducer
