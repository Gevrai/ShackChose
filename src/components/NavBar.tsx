import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Logo } from './Logo';
import styled from 'styled-components';
import { onMobile } from '../config/MediaScreenThresholds';
import useOutsideClickDetector from '../hooks/clickOutside';

const navBarHeight = 90;

interface MenuItem { name: string, url: string }

const MenuItems: MenuItem[] = [
	{ name: "noël", url: "/noel" },
	{ name: "projet", url: "/projet" },
	{ name: "artistes", url: "/artistes" },
	{ name: "contact", url: "/contact" }
]

export const NavBar: React.FC = () => {
	const [menuOpened, setMenuOpened] = useState(false)
	const toggleMenu = () => setMenuOpened(!menuOpened)
	const closeMenu = () => setMenuOpened(false)

	// Menu should close if it is opened and the user clicked outside
	const navLinkRef = useRef<HTMLUListElement>(null)
	useOutsideClickDetector(navLinkRef, closeMenu)

	return (
		<Nav>
			<Logo />
			<NavLinks ref={navLinkRef} menuOpened={menuOpened} >
				{MenuItems.map((item, index) => {
					return <li key={index}>
						<NavLink to={item.url} onClick={closeMenu}>{item.name}</NavLink>
					</li>
				})}
			</NavLinks>
			<MenuIconMobile onClick={toggleMenu}>
				{menuOpened ? <AiOutlineClose /> : <AiOutlineMenu />}
			</MenuIconMobile>
		</Nav>
	)
}

const Nav = styled.nav`
    background: linear-gradient(90deg, ${p => p.theme.colors.primary} 0%, ${p => p.theme.colors.primaryPale} 100%);
    height: ${navBarHeight}px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
	padding: 15px 15px;
`

const NavLinks = styled.ul<{ menuOpened: boolean }>`
	display: flex;
	justify-content: flex-end;
	list-style: none;

	li {
		text-align: center;
	}

	${onMobile} {
        width: 33%;
        left: -33%;

        position: absolute;
        top: ${navBarHeight}px;
        height: calc(50% - ${navBarHeight}px);
        flex-direction: column;
        justify-content: space-around;
		gap: 20px;
        background-color: ${p => p.theme.colors.primaryDark};

        transition: transform 0.5s ease;
		transform: translateX(${p => p.menuOpened ? "100%" : "0%"});
	}
`

const NavLink = styled(Link)`
    text-decoration: none;
    color: ${p => p.theme.colors.mainText};
    padding: 0.5rem 1rem;

	:hover, :active {
		cursor: pointer;
		background-color: ${p => p.theme.colors.primaryDark};
		border-radius: 4px;
	}

	${onMobile} {
		height: auto;
		text-align: center;

		:hover, :active{
			background-color: ${p => p.theme.colors.primaryPale};
		}
	}
`

const MenuIconMobile = styled.div`
    display: none;

	${onMobile} {
        display: block;
		transform: scale(1.3);
		padding: 10px;
		color: ${p => p.theme.colors.mainTextContrast};

		:hover, :active {
			color: ${p => p.theme.colors.mainText};
			cursor: pointer;
		}
	}
`
