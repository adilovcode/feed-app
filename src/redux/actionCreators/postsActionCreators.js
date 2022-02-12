import { getPostsAsync } from '../actions/postsActions'
import {
	GET_POSTS,
	LOAD_POSTS,
	SEARCH_POST,
	SET_PAGE,
	SET_PER_PAGE
} from '../constants/postsTypes'

export const loadPosts = () => {
	getPostsAsync()

	return {
		type: LOAD_POSTS,
		payload: {
			loading: true
		}
	}
}

export const setPosts = data => ({
	type: GET_POSTS,
	payload: {
		posts: data,
		loading: false
	}
})

export const searchPost = search => ({
	type: SEARCH_POST,
	payload: {
		search: search
	}
})

export const setPerPage = perPage => ({
	type: SET_PER_PAGE,
	payload: {
		perPage: perPage
	}
})

export const paginate = page => ({ type: SET_PAGE, payload: { page } })
