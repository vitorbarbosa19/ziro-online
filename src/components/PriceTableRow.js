import React from 'react'
import Link from 'gatsby-link'

export default (props) => (
  <Link
    key={props.index}
    to={props.routeToBrand}
    className={ props.index === 0 ? 'list-style-align-left' : 'list-style-align-right' }>
      {props.brandInfo.replace(/\$/,'').replace(/\,/, '').replace(/\./, ',')}
  </Link>
)
