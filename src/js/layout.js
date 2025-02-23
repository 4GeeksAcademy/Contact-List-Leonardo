import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { AddContacts, Home } from "./views/addContacts";
import { Contactos } from "./views/contactos";
import { EditContacts, Single } from "./views/editContacts";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Formulario from "./component/formulario";
import { EliminarContacto } from "./views/eliminarContacto";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<Contactos />} />
						<Route path="/AddContacts" element={<AddContacts />} />
						<Route path="/EliminarContacto/:id" element={<EliminarContacto />} />
						<Route path="/EditContacts/:contacto" element={<EditContacts />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
