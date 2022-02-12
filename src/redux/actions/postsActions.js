import { getPostsApi } from '../../api/postsApi'
import { setPosts } from '../actionCreators/postsActionCreators'
import { store } from '../store'

// Better to use midllewares in the future
export const getPostsAsync = () => {
	getPostsApi()
		.then(({ data }) => {
			store.dispatch(setPosts(data))
		})
		.catch(e => {
			console.log(e)
		})
}

export const filter = () => {
	let data = { ...store.getState().postsReducer }

	if (data.search) {
		data.posts = data.posts.filter(post =>
			data.search ? post.title.includes(data.search) : true
		)
	}

	const ratio = data.page * data.perPage

	return data.posts.slice(ratio - data.perPage, ratio)
}

export const getItem = id => {
	const item = store
		.getState()
		.postsReducer.posts.filter(item => item.id === id)

	return item.length ? item[0] : {}
}
