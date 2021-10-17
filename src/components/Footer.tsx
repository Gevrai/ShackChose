
import React from 'react'
import styled from 'styled-components'
import { Logo } from './Logo'

interface Props { }

const FooterWrapper = styled.footer`
	background-color: ${p => p.theme.colors.primaryDark};
    color: ${p => p.theme.colors.mainText};
	display: flex;
	justify-content: space-between;
	margin-top: 30px;
    padding: 20px 20px;
`

export const Footer: React.FC<Props> = (p: Props) => {
	return (
		<>
			<FooterWrapper>
				<Logo scale={0.7} />

				<div>
					<div>Gevrai Jodoin-Tremblay</div>
					<div>Joel Jr. Vanier</div>
					<div>&copy; 2021</div>
				</div>
			</FooterWrapper>
		</>
	)
}