import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/index.css";
import { Carta } from "../component/carta";
import Boton from "../component/boton";
import { Navbar } from "../component/navbar";
import { elementType } from "prop-types";

export const Contactos = () => {
  const { store, actions } = useContext(Context);
  const contactos = store.contactos
  const actualizacion = store.newcontact

  useEffect(() => {
    actions.getContactos()
  }, [actualizacion])

  return (
    <>
      <Navbar titulo="Lista de contactos" />
      <div className="container">
        <div className="d-flex justify-content-end">
          <Boton direccion={"/AddContacts"} contenido={"Añadir"} />
        </div>
        {contactos.length > 0 ? (
          contactos.map((element) => {
            return (
              <div className="tarjeta mt-3">
                <Carta nombre={element.name} telefono={element.phone} email={element.email} addres={element.address} id={element.id} />
              </div>
            );
          })) : (
          (
            <div className="sinContactos">
              <p>No tienes contactos, añade uno nuevo en el boton Añadir</p>
            </div>
          )

        )}
      </div>
    </>
  );
};