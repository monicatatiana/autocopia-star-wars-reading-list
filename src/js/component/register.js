import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import [Redirect] from "react-router-dom";
import { Context } from "../store/appContext";

export const Register = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (email === "" || pass === "") {
            alert("correo y contraseña son requeridos");
        }
        console.log(email, pass);
    };

    return (
        <div className="text-center mt-5 d-flex justify-content-center aling-items-center">
            <form style={{ width: "400px" }} onSubmit={e => handleSubmit(e)}>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Email Address</label>
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={e => setPass(e.target.value)}
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Register"/>
            </form>
            {redirect ? <Redirect to="/" /> : ""}
        </div>
    );

};