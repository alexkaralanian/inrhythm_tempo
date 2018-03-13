import React from 'react'
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css"

const Navigation = () => (
	<div class="navigation">
		
		<input type="checkbox" className="nav__checkbox" id="nav-toggle"/>
		<label for="nav-toggle" className="nav__button">MENU</label>
		<div className="nav__background">&nbsp;</div>
		
		<nav>
			<ul className="nav__list">
				<li className="nav__item"><Link className="nav__link" exact to="/">Home</Link></li>
				<li className="nav__item"><Link className="nav__link" to="/candidates">Candidates</Link></li>
			</ul>
		</nav>
	</div>
)

export default Navigation; 

