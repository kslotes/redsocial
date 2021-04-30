import React from "react";


const Login = () => {
    return (
        <div>
            <h2 className="text-center">Iniciar Sesión</h2>
            <form>
                <form className="form-group">
                    <label htmlFor="inputNumeroLegajo">Número de legajo</label>
                    <input type="text" className="form-control" id="inputNumeroLegajo" placeholder="Ingrese número de legajo" />
                </form>
                <form className="form-group">
                    <label htmlFor="inputContraseña">Contraseña</label>
                    <input type="text" className="form-control" id="inputContraseña" placeholder="Ingrese contraseña" />
                    <small>
                        <i>Nunca compartiremos estos datos con nadie.</i>
                    </small>
                </form>
            </form>
            <div>
                <button>
                    INGRESAR
                </button>
                <button>
                    Olvidé mi contraseña
                </button>
            </div>
        </div>
    );
};

export default Login;
