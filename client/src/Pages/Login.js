import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAppContext } from "../Context/appContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAppContext();

  const initialState = {
    fname: "",
    lname: "",
    dob: "",
    phoneNumber: "",
    gender: "none",
    role: "none",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      console.log("empty");
      return;
    } else {
      let response;
      response = await axios.post(
        "http://localhost:8000/api/user/login",
        formData
      );
      const { user } = response.data;
      console.log(user);
      setUser(user);
      navigate("/");
    }
  };
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="form-container border border-2 border-light-subtle  p-5 rounded shadow-sm bg-light">
          <h2 className="text-center fw-bold p-3">Login</h2>

          {/* form start */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3" style={{ width: "300px" }}>
              <label className="px-1 pb-1">Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="Tom@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="px-1 pb-1">Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="********"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            {/* <div className="mb-3" style={{ width: "300px" }}>
              <label className="px-1 pb-1">Role</label>
              <select
                className="form-control"
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
              > */}
            {/* <option value="none" selected disabled hidden>
                  Select role
                </option>
                <option value="user">User</option>
                <option value="staff">Staff</option>
                <option value="admin">Administrator</option>
              </select>
            </div> */}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          {/* form end */}

          <div className="d-flex flex-row mt-3 justify-content-center ">
            <div>Not a member yet?</div>
            <Link to="/register" className="ms-2 text-primary fw-bold">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
