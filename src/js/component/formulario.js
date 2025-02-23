import React, { useContext, useState } from "react";
import Boton from "./boton";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

const Formulario = ({ valorNombre, valorNumero, valueMail, valueDireccion, nombreChange, numeroChange, emailChange, direccionChange, api }) => {
    const { store, actions } = useContext(Context);

    
    return (
        <div className="formulario">
            <from>
                <input className="m-2"
                    type="text"
                    autoComplete="off"
                    placeholder={valorNombre}
                    onChange={nombreChange}
                    required
                /><br />

                <input className="m-2"
                    type="number"
                    autoComplete="off"
                    placeholder={valorNumero}
                    onChange={numeroChange}
                    required
                /><br />

                <input className="m-2"
                    type="email"
                    autoComplete="off"
                    placeholder={valueMail}
                    onChange={emailChange}
                    required
                /><br />

                <input className="m-2"
                    type="text"
                    autoComplete="off"
                    placeholder={valueDireccion}
                    onChange={direccionChange}
                    required
                /><br />

                <Link to="/">
                    <input className="btn botoncin m-2" type="submit" value="Confirmar" onClick={() => api()} />
                </Link>

                <Link to="/"><input value="Cancelar" type="submit" className="btn botoncin m-2"/></Link>
            </from>
        </div>

    )
};

export default Formulario;