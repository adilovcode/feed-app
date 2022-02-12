import api from './client'

export const getPostsApi = () => api.get('photos')
