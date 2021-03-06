import React from 'react'
import { header, rows } from '../utils/brandPricesTable'
import routeExistsForBrand from '../utils/routeExistsForBrand'
import PriceTableRowNoLink from './PriceTableRowNoLink'
import PriceTableRowLink from './PriceTableRowLink'

export default () => (
  <ul style={{
    margin: '10px 35px',
    textAlign: 'center'
  }}>
    {/* ---Table Header--- */}
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
      {header.map((columnTitle, index) => {
        if (index < 4) {
          return (
            <div key={index} className={index === 0 ? 'list-style-align-left' : 'list-style-align-right'}>
              {columnTitle}
            </div>
          )
        } return null
      })}
    </li>
    {/* ---Table Data-- */}
    {rows.sort().map((brand, brandIndex) => {
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
          {brand.map((brandInfo, index) => {
  					if (index < 4) {
  						if (routeExistsForBrand(brand[0])) {
                return (
                  <PriceTableRowLink
                    key={index}
                    routeToBrand={`/${brand[0].replace(/\s/, '-').toLowerCase()}`}
                    brandInfo={brandInfo}
                    index={index}
                  />
                )
              }
              return (
                <PriceTableRowNoLink
                  key={index}
                  routeToBrand={'/precos/#'}
                  brandInfo={brandInfo}
                  index={index}
                />
              )
  					} return null
  				})}
        </li>
  		)
    })}
  </ul>
)
