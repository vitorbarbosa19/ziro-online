import React from 'react'

export default class PriceTableRowNoLink extends React.Component {
  constructor(props) {
    super(props)
    this.preventLinkScrollUp = this.preventLinkScrollUp.bind(this)
  }
  preventLinkScrollUp(event) {
    event.preventDefault()
  }
  render() {
    return (
      <a
        href={this.props.routeToBrand}
        onClick={this.preventLinkScrollUp}
        data-brand-has-route='no'
        className={this.props.index === 0 ? 'list-style-align-left' : 'list-style-align-right'}>
        {this.props.brandInfo.replace(/\$/, '').replace(/\,/, '').replace(/\./, ',')}
      </a>
    )
  }
}
