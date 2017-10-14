import React from 'react'
import axios from 'axios'

export default {
	getThumbnails: (allBrands) => {
		return axios.all( allBrands.map( (brandName) => {
			return axios.get(`https://res.cloudinary.com/ziro/image/list/${brandName.toLowerCase()}.json`)
				.then( (response) => {
					const thumbnails = response.data.resources.map( (thumbnail) => thumbnail.public_id)
					return {
						name: brandName, 
						thumb_id: thumbnails
					}
				})	
		}))
	}
}