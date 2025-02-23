import React from "react";
import { Link } from "react-router-dom";
import Boton from "./boton";


export const Carta = ({ nombre, telefono, email, addres, id }) => {
    return (
        <div className="card">
            <div className="card-body row mt-1 me-0">
                <div className="row col-11">
                <div className="col-md-2 d-flex justify-content-center">
                    <p>{nombre}</p>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                    <p>{telefono}</p>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <p>{email}</p>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                    <p>{addres}</p>
                </div>
                </div>
                <div className="col-md-1 d-flex justify-content-between">
                    <Boton direccion={`/EditContacts/${id}`} contenido={"✏️"}/>
                    <Boton direccion={`/EliminarContacto/${id}`} contenido={"🗑️"}/>
                </div>
            </div>
        </div>
    );
};