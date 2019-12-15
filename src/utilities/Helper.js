import axios from 'axios'
import { notification } from 'antd'

const showNotification = () => {
	notification['error']({
		message: 'Error',
		description:
			'Something went wrong. We are working on getting this fixed as soon as we can. Please try again later.'
	})
}

export const fetchResults = async (searchTerm, page) => {
	//Ideally this information should be placed in a env file
	const endPoint = 'https://api.giphy.com/v1/gifs/search'
	const apiKey = 'mpUZxrIFes8WOIxZ1evrUSTzgib2Zr8N'

	let options = {
		url: `${endPoint}?api_key=${apiKey}&q=${searchTerm}&limit=25&offset=${page}`,
		method: 'get'
	}

	let res = []
	try {
		res = await axios(options)
	} catch (err) {
		showNotification()
		return null
	}

	return res
}
