import React from "react";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  return (
    <div>
      <div class="container d-flex justify-content-center align-items-center vh-100">
        <div class="form-container border border-2 border-light-subtle  p-5 rounded shadow-sm bg-light">
          <h2 class="text-center fw-bold p-3">Login</h2>

          {/* input fields start */}

          <div class="mb-3" style={{ width: "300px" }}>
            <label class="px-1 pb-1">Email</label>
            <input
              class="form-control"
              type="email"
              placeholder="Tom@gmail.com"
            />
          </div>
          <div class="mb-3">
            <label class="px-1 pb-1">Password</label>
            <input
              class="form-control"
              type="password"
              placeholder="********"
            />
          </div>
          <div class="mb-3" style={{ width: "300px" }}>
            <label class="px-1 pb-1">Role</label>
            <select class="form-control">
              <option value="none" selected disabled hidden>
                Select role
              </option>
              <option value="user">User</option>
              <option value="staff">Staff</option>
              <option value="admin">Administrator</option>
            </select>
          </div>
          {/* input fields end */}

          <div class="d-grid">
            <button type="submit" class="btn btn-primary">
              Login
            </button>
          </div>
          <div class="d-flex flex-row mt-3 justify-content-center fw-bold ">
            <div>Not a member yet?</div>
            <Link to="/register" class="ms-2 text-primary fw-bold">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
