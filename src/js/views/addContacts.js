import React, { useState, useEffect, useContext } from "react";
import { Form, Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { Carta } from "../component/carta";
import Boton from "../component/boton";
import { Navbar } from "../component/navbar";
import { elementType } from "prop-types";
import Formulario from "../component/formulario";


export const AddContacts = () => {

  const { store, actions } = useContext(Context);

  const [nombre, setNombre] = useState("")
  const [numero, setNumero] = useState("")
  const [email, setEmail] = useState("")
  const [direccion, setDireccion] = useState("")

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
  const postContactos = async () => {
    if (nombre == "" || numero == "" || email == "" || direccion == "") {
      alert("Al no tener los campos rellenados se te redigirá a la pagina principal")
    } else {
      const response = await fetch("https://playground.4geeks.com/contact/agendas/LeonardoContacto/contacts", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(bodyFetch)
      })
      response.json()
    }
    actions.actualizador()

  }

  return (
    <div>
      <Navbar titulo="Agregar contactos" />
      <div className="text-center mt-5">
        <Formulario
          valorNombre="Nombre" nombreChange={nombreChange}
          valorNumero="Numero de telefono" numeroChange={numeroChange}
          valueMail="Email" emailChange={emailChange}
          valueDireccion="Direccion" direccionChange={direccionChange}
          api={postContactos} />
      </div>
    </div>
  );
};