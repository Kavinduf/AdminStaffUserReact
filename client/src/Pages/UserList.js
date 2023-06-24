import React from "react";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const UserList = () => {
  const [addSection, setAddSection] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefualt();
  };
  return (
    <div>
      <div class="container d-flex justify-content-center align-items-center vh-100">
        <div class="form-container">
          {/* <h2 class="text-center fw-bold p-3 ps-0 ">All users</h2> */}
          <button
            type="button"
            class="btn btn-primary mb-4 "
            onClick={() => setAddSection(true)}
          >
            Add
          </button>

          {/* Add section start */}
          {addSection && (
            <div onSubmit={handleSubmit}>
              <div class="form-container border border-2 border-light-subtle  pt-3 p-5 rounded shadow-sm bg-light">
                <div class="close-btn  d-flex  justify-content-end mt-2">
                  <div
                    class=" border border-3  p-1 py-0  border-dark-subtle"
                    style={{ borderRadius: "50px" }}
                  >
                    <MdClose
                      onClick={() => setAddSection(false)}
                      style={{ marginBottom: "1px" }}
                    />
                  </div>
                </div>
                {/* input fields start */}
                <div class="d-flex flex-row mt-3">
                  <div class="mb-1" style={{ width: "300px" }}>
                    <label class="px-1 pb-1">First Name</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="John"
                      name="fName"
                    />
                  </div>
                  <div class="mb-1 ms-4" style={{ width: "300px" }}>
                    <label class="px-1 pb-1">Last Name</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Donald"
                      name="lName"
                    />
                  </div>
                </div>
                <div class="d-flex flex-row mt-3">
                  <div class="mb-1" style={{ width: "300px" }}>
                    <label class="px-1 pb-1">Date of Birth</label>
                    <input class="form-control" type="date" name="date" />
                  </div>
                  <div class="mb-1 ms-4" style={{ width: "300px" }}>
                    <label class="px-1 pb-1">Phone Number</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="0761231231"
                      maxlength="10"
                      name="phoneNumber"
                    />
                  </div>
                </div>
                <div class="d-flex flex-row mt-3">
                  <div class="mb-1" style={{ width: "300px" }}>
                    <label class="px-1 pb-1">Gender</label>
                    <select class="form-control" name="gender">
                      <option value="none" selected disabled hidden>
                        Select gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div class="mb-1 ms-4" style={{ width: "300px" }}>
                    <label class="px-1 pb-1">Role</label>
                    <select class="form-control" name="role">
                      <option value="none" selected disabled hidden>
                        Select role
                      </option>
                      <option>User</option>
                      <option>Staff</option>
                      <option>Administrator</option>
                    </select>
                  </div>
                </div>
                <div class="d-flex flex-row mt-3">
                  <div class="mb-4" style={{ width: "300px" }}>
                    <label class="px-1 pb-1 ">Email</label>
                    <input
                      class="form-control "
                      type="email"
                      placeholder="John@gmail.com"
                      name="email"
                      disabled
                    />
                  </div>
                  <div class="mb-4 ms-4">
                    <label class="px-1 pb-1" style={{ width: "300px" }}>
                      Password
                    </label>
                    <input
                      class="form-control"
                      type="password"
                      name="password"
                      placeholder="&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;"
                    />
                  </div>
                </div>

                {/* input fields End */}

                <div class="d-grid justify-content-center">
                  <button
                    type="submit"
                    class="btn btn-primary fw-bold"
                    style={{ width: "300px" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Add section end */}

          {/* table start */}

          {/* <div class=" border border-2 border-light-subtle rounded p-1  "> */}
          <table class="table table-hover shadow">
            <thead>
              <tr>
                <th scope="col">User ID</th>
                <th scope="col">Email</th>
                <th scope="col">Full Name</th>
                <th scope="col">Phone number</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12394</td>
                <td class="text-center">Otto@gmail.com</td>
                <td class="text-center">Otto Fernando</td>
                <td>O763423123</td>
                <td>
                  <button type="button" class="btn btn-success">
                    Edit
                  </button>
                  <button type="button" class="btn btn-danger mx-2">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>12394</td>
                <td class="text-center">Otto@gmail.com</td>
                <td class="text-center">Otto Fernando</td>
                <td>O763423123</td>
              </tr>
              <tr>
                <td>12394</td>
                <td class="text-center">Otto@gmail.com</td>
                <td class="text-center">Otto Fernando</td>
                <td>O763423123</td>
              </tr>
            </tbody>
          </table>

          {/* table end */}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default UserList;
