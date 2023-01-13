import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";

import "./Layout.scss";

const Layout = () => {
	const [active, setActive] = useState(false);
	let [isPressed, setIsPressed] = useState(false);

	const handleClick = () => {
		setActive((prevActive) => !prevActive);
		setIsPressed(!isPressed);
	};

	const closeMenu = () => {
		setActive((prevActive) => !prevActive);
	};

	return (
		<>
			<nav className="main-nav">
				<NavLink to="/">
					<img
						src={logo}
						alt="Space Tourism Logo"
						aria-label="Link back to home page"
						className="main-icon"
					/>
				</NavLink>
				<button
					onClick={handleClick}
					aria-pressed={isPressed}
					className={`menu-toggle ${active ? "active" : ""}`}>
					<img
						src={hamburger}
						alt=""
						aria-hidden="true"
						className="icon hamburger"
					/>
					<img
						src={close}
						alt=""
						aria-hidden="true"
						className="icon close"
					/>
				</button>
				<ul className={active ? "active" : ""}>
					<li>
						<NavLink to="/space_tourism/" onClick={closeMenu}>
							<span aria-hidden="true">00</span>Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/space_tourism/destination"
							onClick={closeMenu}>
							<span aria-hidden="true">01</span>Destination
						</NavLink>
					</li>
					<li>
						<NavLink to="/space_tourism/crew" onClick={closeMenu}>
							<span aria-hidden="true">02</span>Crew
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/space_tourism/technology"
							onClick={closeMenu}>
							<span aria-hidden="true">03</span>Technology
						</NavLink>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
};

export default Layout;
