
import React from 'react'
import styled from 'styled-components'

interface Props { }

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
`

export const Contact: React.FC<Props> = (p: Props) => {
	return (
		<Wrapper>
			<p>this is a test</p>
		</Wrapper>
	)
}