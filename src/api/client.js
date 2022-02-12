import { create } from 'apisauce'
import settings from '../config/settings'
import { showToaster } from '../redux/actionCreators/toasterActionsCreators'
import { store } from '../redux/store'

const api = create({
	baseURL: settings.baseUri,
	headers: {
		'Accept-Encoding': 'gzip;q=1.0, compress;q=0.5',
		Accept: 'application/json'
	}
})

api.addAsyncResponseTransform(async response => {
	if (!response.ok) {
		store.dispatch(
			showToaster({
				message: `Error occured: ${response.problem}`,
				status: 'error'
			})
		)

		throw new Error(response.problem)
	}
})

export default api
