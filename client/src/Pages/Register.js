import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const initialState = {
    email: "",
    password: "",
    fName: "",
    lName: "",
    dob: "",
    phoneNumber: "",
    gender: "",
    role: "",
  };
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="form-container border border-2 border-light-subtle  pt-4 p-5 rounded shadow-sm bg-light">
          <h2 className="text-center fw-bold p-3 ">Sign Up</h2>

          {/* input fields start */}
          <div className="mb-3" style={{ width: "300px" }}>
            <label className="px-1 pb-1">First Name</label>
            <input className="form-control" type="text" placeholder="John" />
          </div>
          <div className="mb-3" style={{ width: "300px" }}>
            <label className="px-1 pb-1">Last Name</label>
            <input className="form-control" type="text" placeholder="Donald" />
          </div>
          <div className="mb-3" style={{ width: "300px" }}>
            <label className="px-1 pb-1">Date of Birth</label>
            <input className="form-control" type="date" />
          </div>
          <div className="mb-3" style={{ width: "300px" }}>
            <label className="px-1 pb-1">Phone Number</label>
            <input
              className="form-control"
              type="text"
              placeholder="0761231231"
              maxlength="10"
            />
          </div>
          <div className="mb-3" style={{ width: "300px" }}>
            <label className="px-1 pb-1">Gender</label>
            <select className="form-control">
              <option value="none" selected disabled hidden>
                Select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-3" style={{ width: "300px" }}>
            <label className="px-1 pb-1">Role</label>
            <select className="form-control">
              <option value="none" selected disabled hidden>
                Select role
              </option>
              <option>User</option>
              <option>Staff</option>
              <option>Administrator</option>
            </select>
          </div>
          <div className="mb-3" style={{ width: "300px" }}>
            <label className="px-1 pb-1">Email</label>
            <input
              className="form-control"
              type="email"
              placeholder="John@gmail.com"
            />
          </div>
          <div className="mb-3">
            <label className="px-1 pb-1">Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="********"
            />
          </div>

          {/* input fields End */}

          <div className="d-grid">
            <button type="submit" className="btn btn-primary fw-bold">
              Sign Up
            </button>
          </div>
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
