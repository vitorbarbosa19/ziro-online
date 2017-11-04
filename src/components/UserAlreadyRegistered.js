import React from 'react'
import { Image} from 'cloudinary-react'

export default (props) => (
	<div 
		style={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			fontFamily: 'karla',
			fontSize: '16px',
			textAlign: 'center'
		}}>
	    <Image
	      style={{margin: '20px 0 0'}}
	      cloudName='ziro' 
	      width='40'
	      publicId='error-icon_dqsgnx'
	      version='1508212649'
	      format='png'
	      secure='true'
	    />
			<p 
				style={{
					fontFamily: 'karla',
					margin: '0',
					textAlign: 'center'
				}}>
					Usuário já cadastrado no sistema
			</p>
	</div>
)
