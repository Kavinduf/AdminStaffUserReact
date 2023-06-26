import axios from "axios";
import React from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const EditProfile = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="form-container border border-2 border-light-subtle  pt-4 p-5 rounded shadow-sm bg-light">
          <h2 className="text-center fw-bold p-3 ps-0 ">Edit Profile</h2>

          {/* input fields start */}
          <div className="d-flex flex-row mt-3">
            <div className="mb-1" style={{ width: "300px" }}>
              <label className="px-1 pb-1">First Name</label>
              <input className="form-control" type="text" placeholder="John" />
            </div>
            <div className="mb-1 ms-4" style={{ width: "300px" }}>
              <label className="px-1 pb-1">Last Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Donald"
              />
            </div>
          </div>
          <div className="d-flex flex-row mt-3">
            <div className="mb-1" style={{ width: "300px" }}>
              <label className="px-1 pb-1">Date of Birth</label>
              <input className="form-control" type="date" />
            </div>
            <div className="mb-1 ms-4" style={{ width: "300px" }}>
              <label className="px-1 pb-1">Phone Number</label>
              <input
                className="form-control"
                type="text"
                placeholder="0761231231"
                maxLength="10"
              />
            </div>
          </div>
          <div className="d-flex flex-row mt-3">
            <div className="mb-1" style={{ width: "300px" }}>
              <label className="px-1 pb-1">Gender</label>
              <select className="form-control">
                <option value="none" selected disabled hidden>
                  Select gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="mb-1 ms-4" style={{ width: "300px" }}>
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
          </div>
          <div className="d-flex flex-row mt-3">
            <div className="mb-4" style={{ width: "300px" }}>
              <label className="px-1 pb-1 ">Email</label>
              <input
                className="form-control "
                type="email"
                placeholder="John@gmail.com"
                disabled
              />
            </div>
            <div className="mb-4 ms-4">
              <label className="px-1 pb-1" style={{ width: "300px" }}>
                Password
              </label>
              <input
                className="form-control"
                type="password"
                placeholder="&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;"
              />
            </div>
          </div>

          {/* input fields End */}

          <div className="d-grid justify-content-center">
            <button
              type="submit"
              className="btn btn-primary fw-bold"
              style={{ width: "300px" }}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
