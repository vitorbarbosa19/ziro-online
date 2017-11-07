import allBrands from './allBrands'

export default (route) => {
	return allBrands.find( (brandName) => {
		return brandName === route
	})	
}