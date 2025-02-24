import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { Carta } from "../component/carta";
import Boton from "../component/boton";
import { Navbar } from "../component/navbar";

export const EliminarContacto = () => {
    const { store, actions } = useContext(Context);
    let contactos = store.contactos
    const params = useParams()
    console.log("parametros", params);



    return (
        <>
            <Navbar titulo="Seguro que quieres eliminar este contacto?" />
            <div className="text-center mt-5">
                <Link to="/">
                    <button className="btn botoncin m-2" onClick={async() => {
                        const response = await fetch(`https://playground.4geeks.com/contact/agendas/LeonardoContacto/contacts/${params.id}`, {
                            method: "DELETE"
                        });
                        actions.actualizador()
                        
                    }}>
                        Confirmar
                    </button>
                </Link>
                <Link to="/">
                    <button className="btn botoncin m-2">Volver</button>
                </Link>
            </div>
        </>
    );
};