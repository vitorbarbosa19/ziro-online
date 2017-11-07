import React from 'react'
import { Image } from 'cloudinary-react'
import { header, rows } from '../utils/brandPricesTable'
import routeExistsForBrand from '../utils/routeExistsForBrand'
import PriceTableRow from '../components/PriceTableRow'

export default (props) => (
	<ul style={{
		margin: '10px 35px',
		textAlign: 'center'
	}}>
		<Image
	    style={{margin: '0 auto 35px'}}
	    cloudName='ziro' 
	    width='85' 
	    publicId='price-icon_ijxlwu'
	    version='1510007822'
	    format='png'
	    secure='true'
	  />
	{/*---Table Header---*/}
		<li style={{
			listStyle: 'none',
			display: 'flex',
			textAlign: 'right',
			fontFamily: 'hind vadodara',
			fontSize: '16px',
			fontWeight: '700',
			color: '#303e4d',
			marginBottom: '25px',
			paddingBottom: '5px',
			borderBottom: '2px solid #ffdd00'
		}}>
			{header.map( (columnTitle, index) => {
				if (index < 4)
					return (
						<div key={index} className={ index === 0 ? 'list-style-align-left' : 'list-style-align-right' }>
							{columnTitle}
						</div>
					)
				else
					return null
			})}
		</li>
	{/*---Table Data--*/}
		{rows.sort().map( (brand, brandIndex) => {
			return	(
  			<li 
  				key={brandIndex}
  				style={{
  					listStyle: 'none',
	  				display: 'flex',
	  				textAlign: 'right',
	    			fontFamily: 'karla',
						fontSize: '13px'
	  		}}> 
  				{brand.map( (brandInfo, index) => {
  					if(index < 4) {
  						if(routeExistsForBrand(brand[0]))
  							return (
  								<PriceTableRow 
										routeToBrand={`/${brand[0].replace(/\s/, '-').toLowerCase()}`}
										brandInfo={brandInfo}
										index={index}
									/>
								)
  						else
	  						return ( 
	  							<PriceTableRow 
										routeToBrand={'/precos/#'}
										brandInfo={brandInfo}
										index={index}
									/>
								)
  					}
  					else
  						return null
  				})} 
  			</li>
  		)
		})}
	</ul>
)
