import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { theme } from '../globals';

interface Props { }

const StyledLink = styled(Link)<Props>`
    color: ${theme.colors.mainText};
    justify-self: flex-start;
    justify-content: flex-start;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    padding-right: 50px;
`

export const Logo: React.FC<Props> = (p: Props) => {
	return (
		<StyledLink to="/">
			<h2>shack chose</h2>
			<p>atelier boutique <b>éphémère</b></p>
		</StyledLink>
	)
}

