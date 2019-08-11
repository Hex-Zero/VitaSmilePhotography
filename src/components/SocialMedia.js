import React from 'react'
import styled from 'styled-components'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'

const SocialMedia = () => {
	return (
		<Styled>
			<a
				className="facebook"
				href="https://www.facebook.com/vitasmilephotography"
				target="_blank"
				rel="noopener noreferrer">
				<FaFacebookSquare size={43} />
			</a>
			<a
				className="instagram"
				href="https://urlgeni.us/instagram/vita.smile"
				target="_blank"
				rel="noopener noreferrer">
				<FaInstagram className="fa-instagram" size={43} />
			</a>
			<svg width="0" height="0">
				<radialGradient id="rg" r="150%" cx="30%" cy="107%">
					<stop stop-color="#fdf497" offset="0" />
					<stop stop-color="#fdf497" offset="0.05" />
					<stop stop-color="#fd5949" offset="0.45" />
					<stop stop-color="#d6249f" offset="0.6" />
					<stop stop-color="#285AEB" offset="0.9" />
				</radialGradient>
			</svg>
			<svg width="0" height="0">
				<radialGradient id="rgi" r="150%" cx="30%" cy="107%">
					<stop stop-color="#e1d989" offset="0" />
					<stop stop-color="#e1d989" offset="0.05" />
					<stop stop-color="#ce483b" offset="0.45" />
					<stop stop-color="#c42192" offset="0.6" />
					<stop stop-color="#214dce" offset="0.9" />
				</radialGradient>
			</svg>
		</Styled>
	)
}

const Styled = styled.div`
	.facebook {
		width: 44px;
		display: block;
		position: fixed;
		right: 1px;
		top: 503px;
	}
	.instagram svg * {
		fill: url(#rg);
	}

	.instagram:hover svg * {
		fill: url(#rgi);
	}

	.instagram {
		width: 44px;
		display: block;
		position: fixed;
		right: 1px;
		top: 545px;
	}
	.a {
		padding-right: 10px;
	}
`

export default SocialMedia
