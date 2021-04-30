import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import {Button} from '../BasicComponents/Button';
import {FormGroup} from '../BasicComponents/FormGroup'
import {H2} from '../BasicComponents/H2'
import {Label} from '../BasicComponents/Label'

const Login = () => {
    return (
        <div className="container-fluid d-flex flex-column">
            <H2 className="text-center col-md-9 col-sm-6">Iniciar Sesión</H2>
            <form>
                <FormGroup className="form-group">
                    <Label htmlFor="inputNumeroLegajo">Número de legajo</Label>
                    <input type="text" className="form-control col-md-9" id="inputNumeroLegajo" placeholder="Ingrese número de legajo"/>
                </FormGroup>
                <FormGroup className="form-group">
                    <Label htmlFor="inputContraseña">Contraseña</Label>
                    <input type="text" className="form-control col-md-9" id="inputContraseña" placeholder="Ingrese contraseña"/>
                    <small><i>Nunca compartiremos estos datos con nadie.</i></small>
                </FormGroup>
            </form>
                <Button secondary className="align-self-start" type="submit">INGRESAR</Button>
                <Button forgotPassword className="align-self-end mt-5">Olvidé mi contraseña</Button>
        </div>
    );
};

export default Login;
