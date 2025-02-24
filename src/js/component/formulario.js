import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importar useNavigate
import { Context } from "../store/appContext";

const Formulario = ({ valorNombre, valorNumero, valueMail, valueDireccion, nombreChange, numeroChange, emailChange, direccionChange, api }) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate(); // Usar el hook useNavigate para redirección

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita el comportamiento por defecto del formulario
        api(); // Llama a la API solo cuando el formulario se envíe
        navigate("/"); // Redirige a la página principal después del submit
    };

    return (
        <div className="formulario p-3 w-75 mx-auto">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        className="form-control form-control-lg m-2"
                        type="text"
                        autoComplete="off"
                        placeholder={valorNombre}
                        onChange={nombreChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <input
                        className="form-control form-control-lg m-2"
                        type="number"
                        autoComplete="off"
                        placeholder={valorNumero}
                        onChange={numeroChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <input
                        className="form-control form-control-lg m-2"
                        type="email"
                        autoComplete="off"
                        placeholder={valueMail}
                        onChange={emailChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <input
                        className="form-control form-control-lg m-2"
                        type="text"
                        autoComplete="off"
                        placeholder={valueDireccion}
                        onChange={direccionChange}
                        required
                    />
                </div>

                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <button
                        className="btn btn-lg botoncin m-2"
                        type="submit"
                    >
                        Confirmar
                    </button>
                    <Link to="/" className="btn btn-lg botoncin m-2">
                        Cancelar
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Formulario;
