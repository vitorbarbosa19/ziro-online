import React from 'react'
import { Image } from 'cloudinary-react'
import { buttonStyleDark } from '../styles/styles'

export default (props) => (
  <div 
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Image
        style={{margin: '20px 0'}}
        cloudName='ziro'
        width='50'
        publicId='profile-icon-reverse_ws9hwo'
        version='1509828391'
        format='png'
        secure='true'
      />
      <p 
        style={{
          fontFamily: 'karla',
          margin: '0'
        }}>
          Você está logado na conta:
      </p>
      <p 
        style={{
          fontFamily: 'karla',
          fontSize: '14px',
          color: '#303e4d',
          margin: '10px 0 20px'
        }}>
          {props.userLogin}
      </p>
      <a
        href='#'
        style={buttonStyleDark}
        onClick={props.logout}>
          Logout
      </a>
  </div>
)
