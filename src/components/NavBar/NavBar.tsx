import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

interface MenuItem {
	name: string,
	url: string,
	subitems?: MenuItem[]
}

const MenuItems: MenuItem[] = [
	{
		name: "noël",
		url: "/noel",
	}, {
		name: "projet",
		url: "/projet",
	}, {
		name: "artistes",
		url: "/artistes",
		subitems: [{
			name: "Sylvie",
			url: "/artistes/sylvie",
		}, {
			name: "Chantale",
			url: "/artistes/chantale",
		}, {
			name: "Isabelle",
			url: "/artistes/isabelle",
		}]
	}, {
		name: "contact",
		url: "/contact",
	}
]

export const NavBar: React.FC = () => {
	const [menuOpened, setMenuOpened] = useState(false)

	const toggleMenu = () => {
		setMenuOpened(!menuOpened)
	}

	const closeMenu = () => {
		setMenuOpened(false)
	}

	return (
		<nav className="navbar">

			<Link to="/" className="navbar-logo">
				<h2>shack choses</h2>
				<p>atelier boutique <b>éphémère</b></p>
			</Link>

			<ul className={`nav-links ${menuOpened ? "nav-links-opened" : "nav-links-closed"}`} >
				{MenuItems.map((item, index) => {
					return (
						<li key={index}>
							<Link to={item.url} className="nav-link" onClick={closeMenu}>{item.name}</Link>
						</li>
					)
				})}
			</ul>
			<div className="list-icon" onClick={toggleMenu}>
				{menuOpened ? <AiOutlineClose /> : <AiOutlineMenu />}
			</div>
		</nav>
	)
}
