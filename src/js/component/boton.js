import React, { useContext } from "react";
import { Link } from "react-router-dom";


const Boton = ({direccion, contenido, clase}) => {

    return (
        <Link to={direccion} className={clase}><button className="btn botoncin me-3">{contenido}</button></Link>       
    )
};

export default Boton;