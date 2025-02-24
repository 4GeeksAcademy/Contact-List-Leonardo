import React from "react";
import { Link } from "react-router-dom";
import Boton from "./boton";


export const Carta = ({ nombre, telefono, email, addres, id }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="row align-items-center">
                    {/* Nombre */}
                    <div className="col-12 col-md-3 d-flex justify-content-center mb-2 mb-md-0">
                        <p>Nombre <br/>{nombre}</p>
                    </div>

                    {/* Teléfono */}
                    <div className="col-12 col-md-3 d-flex justify-content-center mb-2 mb-md-0">
                        <p>Telefono <br/>{telefono}</p>
                    </div>

                    {/* Email */}
                    <div className="col-12 col-md-3 d-flex justify-content-center mb-2 mb-md-0">
                        <p>Email <br/>{email}</p>
                    </div>

                    {/* Dirección */}
                    <div className="col-12 col-md-3 d-flex justify-content-center mb-2 mb-md-0">
                        <p>Direccion <br/>{addres}</p>
                    </div>
                </div>

                <div className="d-flex justify-content-between mt-2">
                    <Boton direccion={`/EditContacts/${id}`} contenido={"Editar"} />
                    <Boton direccion={`/EliminarContacto/${id}`} contenido={"Eliminar"} />
                </div>
            </div>
        </div>
    );
};
