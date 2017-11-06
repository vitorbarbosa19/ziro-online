import React from 'react'
import Link from 'gatsby-link'
import { Image } from 'cloudinary-react'
import { header, rows } from '../utils/brandPricesTable'
import { buttonStyleDark } from '../styles/styles'

export default (props) => (
	<ul style={{
		margin: '20px 15px'
	}}>
	{/*---Table Header---*/}
		<li style={{
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
						<div className={ index === 0 ? 'list-style-align-left' : 'list-style-align-right' }>
							{columnTitle}
						</div>
					)
				else
					return null
			})}
		</li>
	{/*---Table Data--*/}
		{rows.sort().map( (brand) => {
			return	(
  			<li style={{
	  			display: 'flex',
	  			textAlign: 'right',
	    		fontFamily: 'karla',
					fontSize: '13px'
	  		}}> 
  				{brand.map( (brandInfo, index) => {
  					if(index < 4)
  						return (
								<div className={ index === 0 ? 'list-style-align-left' : 'list-style-align-right' }>
  								{brandInfo.replace(/\$/,'').replace(/\,/, '').replace(/\./, ',')}
  							</div>
  						)
  					else
  						return null
  				})} 
  			</li>
  		)
		})}
	</ul>
)
