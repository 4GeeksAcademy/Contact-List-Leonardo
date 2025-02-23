import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import Formulario from "../component/formulario";

export const EditContacts = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const persona = store.contactos.find((element) => params.contacto == element.id)

	const [nombre, setNombre] = useState(persona.name)
	const [numero, setNumero] = useState(persona.phone)
	const [email, setEmail] = useState(persona.email)
	const [direccion, setDireccion] = useState(persona.address)

	const nombreChange = (event) => {
		setNombre(event.target.value)
	}
	const numeroChange = (event) => {
		setNumero(event.target.value)
	}
	const emailChange = (event) => {
		setEmail(event.target.value)
	}
	const direccionChange = (event) => {
		setDireccion(event.target.value)
	}

	let bodyFetch = {
		name: nombre,
		phone: numero,
		email: email,
		address: direccion
	}

	const putContactos = async () => {
		const response = await fetch(`https://playground.4geeks.com/contact/agendas/LeonardoContacto/contacts/${params.contacto}`, {
			method: "PUT",
			headers: {
				accept: "application/json",
				"Content-type": "application/json",
			},
			body: JSON.stringify(bodyFetch)
		});
		actions.actualizador()
	}



	return (
		<>
			<Navbar titulo={persona.name} />
			<div className="text-center mt-5">
				<Formulario
					valorNombre={persona.name} nombreChange={nombreChange}
					valorNumero={persona.phone} numeroChange={numeroChange}
					valueMail={persona.email} emailChange={emailChange}
					valueDireccion={persona.address} direccionChange={direccionChange}
					api={putContactos} />
			</div>
		</>
	);
};