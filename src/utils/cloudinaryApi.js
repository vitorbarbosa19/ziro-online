import React from 'react'
import axios from 'axios'

export default {
	getThumbnailsAndNames: (allBrands) => {
		return axios.all( allBrands.map( (brandName) => {
			return axios.get(`https://res.cloudinary.com/ziro/image/list/${brandName.toLowerCase()}.json`)
				.then( (response) => {
					if(response.status === 200) {
						const thumbnails = response.data.resources.map( (thumbnail) => thumbnail.public_id)
						return {
							name: brandName, 
							thumb_id: thumbnails,
							updated_at: response.data.updated_at
						}
					}
				})
				.catch( (error) => {
					console.log(error)
				})
		}))
	},
	getBrandGallery: (brandName) => {
		return axios.get(`https://res.cloudinary.com/ziro/image/list/${brandName.toLowerCase()}.json`)
	}
}