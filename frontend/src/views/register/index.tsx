import React, { useState } from "react";
import { toast } from "react-toastify";
import API from 'src/services/api';
import { NavLink, withRouter } from "react-router-dom";

const Register = ({ history }) => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        password2: "",
        name: "",
    });
    const { email, password, password2, name } = inputs;

    const onChange = (e) =>
        setInputs({ ...inputs, [e.target.name]: e.target.value });

    const onSubmitForm = async (e) => {
        e.preventDefault();

        if (password !== password2) {
            toast.error("Passwords must match");
            return;
        }
        
        try {
            const res = await API.auth.register({ email, password, password2, name });
            const parseRes = await res.json();

            if (parseRes == "ok") {
                toast.success("Registration Successful");
                history.push("/login");
            } else {
                toast.error(parseRes)
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="authenticate-card card bg-light p-4 mt-5">
            <h1 className="text-center">Register</h1>
            <form onSubmit={onSubmitForm}>
                <input
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Email"
                    required={true}
                    onChange={(e) => onChange(e)}
                    className="form-control my-3"
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    required={true}
                    onChange={(e) => onChange(e)}
                    className="form-control my-3"
                />
                <input
                    type="password"
                    name="password2"
                    value={password2}
                    placeholder="Confirm Password"
                    required={true}
                    onChange={(e) => onChange(e)}
                    className="form-control my-3"
                />
                <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Name"
                    required={true}
                    onChange={(e) => onChange(e)}
                    className="form-control my-3"
                />
                <button
                    type="submit"
                    className="btn btn-primary text-white btn-block mt-3"
                >
                    Register
                </button>
            </form>
            <span className="text-center mt-3">
                <NavLink
                    to={"login"}
                >
                    Log In
                </NavLink>
            </span>
        </div>
    )
};

export default withRouter(Register);
