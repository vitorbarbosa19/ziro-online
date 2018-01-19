import React from 'react'
import favicon from '../favicon.png'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id='gatsby-inlined-css'
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
        {/* Open Graph Meta Tags ---START */}
          <meta property='og:url' content='https://ziro.online' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Ziro' />
          <meta property='og:description' content='O maior catálogo de roupas do Bom Retiro' />
          <meta property='og:image' content='https://res.cloudinary.com/ziro/image/upload/v1516321831/ziro-image_yribev.jpg' />
          <meta property='og:image:alt' content='Moda feminina' />
          <meta property='og:locale' content='pt_BR' />
        {/* Open Graph Meta Tags ---END */}
          <link rel='shortcut icon' type='image/png' href={favicon} />
          {this.props.headComponents}
          {css}
        </head>
        <body>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id='___gatsby'
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
