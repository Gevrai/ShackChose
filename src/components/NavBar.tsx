import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Logo } from './Logo';
import styled from 'styled-components';
import { onMobile, theme } from '../globals';

const navBarHeight = 80;

interface MenuItem { name: string, url: string }

const MenuItems: MenuItem[] = [
	{ name: "noël", url: "/noel" },
	{ name: "projet", url: "/projet" },
	{ name: "artistes", url: "/artistes" },
	{ name: "contact", url: "/contact" }
]

const Nav = styled.nav`
    background: linear-gradient(90deg, ${theme.colors.primary} 0%, ${theme.colors.primaryPale} 100%);
    height: ${navBarHeight}px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
`

const NavLinks = styled.ul<{ menuOpened: boolean }>`
	display: flex;
	justify-content: flex-end;
	list-style: none;

	${onMobile} {
        width: 33%;
        left: -33%;

        position: absolute;
        top: ${navBarHeight}px;
        height: calc(50% - ${navBarHeight}px);
        flex-direction: column;
        justify-content: space-around;
		gap: 20px;
        background-color: ${theme.colors.primaryDark};

        transition: transform 0.5s ease;
		transform: translateX(${p => p.menuOpened ? "100%" : "0%"});
	}
`

const NavLink = styled(Link)`
    text-decoration: none;
    color: ${theme.colors.mainText};
    padding: 0.5rem 1rem;

	:hover, :active {
		cursor: pointer;
		background-color: ${theme.colors.primaryDark};
		border-radius: 4px;
	}

	${onMobile} {
		height: auto;
		text-align: center;

		:hover, :active{
			background-color: ${theme.colors.primaryPale};
		}
	}
`

const ListIcon = styled.div`
    display: none;

	${onMobile} {
        display: block;
		transform: scale(1.3);
		padding: 10px;
		color: ${theme.colors.mainTextContrast};

		:hover, :active {
			color: ${theme.colors.mainText};
			cursor: pointer;
		}
	}
`

export const NavBar: React.FC = () => {
	const [menuOpened, setMenuOpened] = useState(false)

	const toggleMenu = () => setMenuOpened(!menuOpened)
	const closeMenu = () => setMenuOpened(false)

	return (
		<Nav>
			<Logo />
			<NavLinks menuOpened={menuOpened}>
				{MenuItems.map((item, index) => {
					return <li key={index} style={{ textAlign: "center" }}>
						<NavLink to={item.url} onClick={closeMenu}>{item.name}</NavLink>
					</li>
				})}
			</NavLinks>
			<ListIcon onClick={toggleMenu}>
				{menuOpened ? <AiOutlineClose /> : <AiOutlineMenu />}
			</ListIcon>
		</Nav>
	)
}
