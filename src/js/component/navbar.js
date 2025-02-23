import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({titulo}) => {
	return (
		<nav className="navbar navbar-light mb-3 d-flex justify-content-center">			
				<h1 className="">{titulo}</h1>			
		</nav>
	);
};