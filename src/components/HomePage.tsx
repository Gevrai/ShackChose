import React from 'react'
import styled from 'styled-components'
import { Artists } from './Artists'

interface Props { }

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	text-align: center;
`

const TopImg = styled.img`
    overflow: hidden;
	width: 100%;
	max-height: 200px;
`

const Title = styled.h1`
	font-size: 3em;
	padding: 10px 10px;
`

const Description = styled.p`
	margin: 20px 12%;
`

export const HomePage: React.FC<Props> = (p: Props) => {
	return (
		<Wrapper>
			<TopImg src={`https://picsum.photos/id/10/1024/300`} />

			<section>
				<Title>Lorem Ipsum</Title>
				<Description>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
					qui officia deserunt mollit anim id est laborum.
				</Description>
			</section>

			<Artists/>
		</Wrapper>
	)
}
