import axios from 'axios'

export default {
  getThumbnailsAndNames: (allBrands) => {
    return axios.all(allBrands.map((brandName) => {
      return axios.get(`https://res.cloudinary.com/ziro/image/list/${brandName.toLowerCase()}.json`)
        .then((response) => {
          if (response.status === 200) {
            const thumbnails = response.data.resources.map((thumbnail) => thumbnail.public_id)
            return {
              name: brandName,
              thumb_id: thumbnails,
              updated_at: response.data.updated_at
            }
          }
          return {
            erro: 'Erro na Api'
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }))
  },
  getBrandGallery: (brandName, next) => {
    if (next)
      return axios.get(`https://ziro-data.now.sh?type=cloudinary&brand=${brandName.toLowerCase()}&next=${next}`)
    return axios.get(`https://ziro-data.now.sh?type=cloudinary&brand=${brandName.toLowerCase()}`)
  }
}
