import React, { useState } from "react";
import { toast } from "react-toastify";
import API from '../../services/api';
import { NavLink } from "react-router-dom";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await API.auth.login({ email, password });
      const parseRes = await res.json();
      if (parseRes.jwt) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Logged in Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="authenticate-card card bg-light p-4 mt-5">
      <h1 className="text-center">Login</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />
        <button className="btn btn-success btn-block">Submit</button>
      </form>
      <span className="text-center mt-3">
        <NavLink
          to={"register"}
        >
          Register
        </NavLink>
      </span>
    </div>
  );
};

export default Login;
