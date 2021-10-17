import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

interface Props {
    scale?: number
}

const StyledLink = styled(Link) <{ p: Props }>`
    ${({p}) => p.scale && `transform: scale(${p.scale});`}
    color: ${p => p.theme.colors.mainText};
    text-decoration: none;
    cursor: pointer;
`

export const Logo: React.FC<Props> = (p: Props) => {
    return (
        <StyledLink p={p} to="/">
            <h2>shack chose</h2>
            <p>atelier boutique <b>éphémère</b></p>
        </StyledLink>
    )
}

