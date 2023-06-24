import React from "react";

const StaffList = () => {
  return (
    <div>
      <div class="container d-flex justify-content-center align-items-center vh-100">
        <div class="form-container border border-2 border-light-subtle  pt-4 p-5 rounded shadow-sm bg-light">
          <h2 class="text-center fw-bold p-3 ps-0 ">All users</h2>
          <button type="button" class="btn btn-primary mb-4">
            Add
          </button>
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
        </div>
      </div>
    </div>
    // </div>
  );
};

export default StaffList;
