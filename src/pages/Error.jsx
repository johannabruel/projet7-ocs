import React from "react";
import { Link } from "react-router-dom";

function Error() {
    return (
        <div className="error">
            <div className="error__container">
                <p className="error__container--number">404</p>
                <p className="error__container--text">Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <Link to="/" className="error__link">Retourner sur la page d'accueil</Link>
        </div>
    );
};

export default Error;