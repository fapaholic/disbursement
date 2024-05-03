import React, { useEffect } from "react";
import Header from "../components/header";
import { useState } from "react";
import Login from "../components/LoginForm/login";
import RegisterForm from "../components/registerForm";

function Register() {
    const [ User, setUser ] = useState(null)

return (
    <div>
        <div>
            <Header />
        </div>
        <div>
            <RegisterForm />
        </div>

    </div>



)
};
export default Register;


