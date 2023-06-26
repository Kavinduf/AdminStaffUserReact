import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAppContext } from "../Context/appContext";

const Register = () => {
  const navigate = useNavigate();
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
  const { setUser } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fname ||
      !formData.lname ||
      !formData.dob ||
      !formData.phoneNumber ||
      !formData.gender ||
      !formData.role ||
      !formData.email ||
      !formData.password
    ) {
      console.log("empty");
      return;
    } else {
      let response;
      response = await axios.post("http://localhost:8000/api/user", formData);
      const { user } = response.data;
      console.log(user);
      setUser(user);
      navigate("/");
    }
  };

  return (
    <div>
      <div className="container d-flex justify-content-center my-5">
        <div
          className="form-container border border-2 border-light-subtle  pt-4 p-5 rounded shadow-sm bg-light"
          style={{ maxWidth: "500px", width: "100%" }}
        >
          <h2 className="text-center fw-bold p-3 ">Sign Up</h2>

          {/* input fields start */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="px-1 pb-1">First Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="John"
                value={formData.fname}
                onChange={(e) =>
                  setFormData({ ...formData, fname: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="px-1 pb-1">Last Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Donald"
                value={formData.lname}
                onChange={(e) =>
                  setFormData({ ...formData, lname: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="px-1 pb-1">Date of Birth</label>
              <input
                className="form-control"
                type="date"
                value={formData.dob}
                onChange={(e) =>
                  setFormData({ ...formData, dob: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="px-1 pb-1">Phone Number</label>
              <input
                className="form-control"
                type="text"
                placeholder="0761231231"
                maxlength="10"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="px-1 pb-1">Gender</label>
              <select
                className="form-control"
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              >
                <option value="none" selected disabled hidden>
                  Select gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="px-1 pb-1">Role</label>
              <select
                className="form-control"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
              >
                <option value="none" selected disabled hidden>
                  Select role
                </option>
                <option value="user">User</option>
                <option value="staff">Staff</option>
                <option value="admin">Administrator</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="px-1 pb-1">Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="John@gmail.com"
                value={formData.email}
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
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary fw-bold">
                Sign Up
              </button>
            </div>
          </form>
          {/* input fields End */}

          <div className="d-flex flex-row mt-3 justify-content-center ">
            <div>Already a member?</div>
            {/* <div className="ms-2 text-primary fw-bold">Login</div> */}
            <Link to="/login" className="ms-2 text-primary fw-bold">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
