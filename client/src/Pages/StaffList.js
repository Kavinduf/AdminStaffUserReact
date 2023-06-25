import React, { useEffect } from "react";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import axios from "axios";
const initialState = {
  _id: "",
  fname: "",
  lname: "",
  dob: "",
  phoneNumber: "",
  gender: "none",
  role: "none",
  email: "",
  password: "",
};

const StaffList = () => {
  const [users, setUsers] = useState([]);
  const init = async () => {
    const response = await axios.get("http://localhost:8000/api/user/staff");
    console.log(response.data);
    setUsers(response.data.users);
  };
  useEffect(() => {
    init();
  }, []);

  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [addState, setAddState] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);

  const handleAdd = () => {
    setAddState(true);
    setFormData(initialState);
    setOpen(true);
  };
  const handleEdit = (user) => {
    setEditUser(user);
    setFormData(user);
    setAddState(false);
    // setFormData(initialState);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  // const handleDelete = async (e) => {
  //   setDeleteUser(user);
  // };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 1000,
    // bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    // p: 4,
  };
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (addState) {
        response = await axios.post("http://localhost:8000/api/user", formData);
      } else {
        response = await axios.patch(
          `http://localhost:8000/api/user/${formData._id}`,
          formData
        );
      }
      const { user } = response.data;
      console.log(user);
      handleClose();
      await init();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3 className="w-full bg-secondary">User List</h3>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={handleSubmit}>
              <div className="form-container border border-2 border-light-subtle  pt-3 p-5 rounded shadow-sm bg-light">
                <div className="close-btn  d-flex  justify-content-end mt-2">
                  <div
                    className=" border border-3  p-1 py-0  border-dark-subtle"
                    style={{ borderRadius: "50px" }}
                  >
                    <MdClose
                      onClick={handleClose}
                      style={{ marginBottom: "1px" }}
                    />
                  </div>
                </div>
                {/* input fields start */}
                <div className="d-flex flex-row mt-3">
                  <div className="mb-1" style={{ width: "300px" }}>
                    <label className="px-1 pb-1">First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="John"
                      name="fName"
                      value={formData.fname}
                      onChange={(e) =>
                        setFormData({ ...formData, fname: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-1 ms-4" style={{ width: "300px" }}>
                    <label className="px-1 pb-1">Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Donald"
                      name="lName"
                      value={formData.lname}
                      onChange={(e) =>
                        setFormData({ ...formData, lname: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="d-flex flex-row mt-3">
                  <div className="mb-1" style={{ width: "300px" }}>
                    <label className="px-1 pb-1">Date of Birth</label>
                    <input
                      className="form-control"
                      type="date"
                      name="date"
                      value={formData.dob}
                      onChange={(e) =>
                        setFormData({ ...formData, dob: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-1 ms-4" style={{ width: "300px" }}>
                    <label className="px-1 pb-1">Phone Number</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="0761231231"
                      maxlength="10"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phoneNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="d-flex flex-row mt-3">
                  <div className="mb-1" style={{ width: "300px" }}>
                    <label className="px-1 pb-1">Gender</label>
                    <select
                      className="form-control"
                      name="gender"
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
                  <div className="mb-1 ms-4" style={{ width: "300px" }}>
                    <label className="px-1 pb-1">Role</label>
                    <select
                      className="form-control"
                      name="role"
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
                </div>
                <div className="d-flex flex-row mt-3">
                  <div className="mb-4" style={{ width: "300px" }}>
                    <label className="px-1 pb-1 ">Email</label>
                    <input
                      className="form-control "
                      type="email"
                      placeholder="John@gmail.com"
                      name="email"
                      disabled={!addState}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-4 ms-4">
                    <label className="px-1 pb-1" style={{ width: "300px" }}>
                      Password
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="&#183;&#183;&#183;&#183;&#183;&#183;&#183;&#183;"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
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
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </Box>
        </Modal>
        <div className="form-container">
          {/* <h2 className="text-center fw-bold p-3 ps-0 ">All users</h2> */}
          <button
            type="button"
            className="btn btn-primary mb-4 "
            onClick={() => handleAdd()}
          >
            Add
          </button>

          {/* Add section end */}

          {/* table start */}

          {/* <div className=" border border-2 border-light-subtle rounded p-1  "> */}
          <table className="table table-hover shadow">
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
              {users?.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td className="text-center">{user.email}</td>
                  <td className="text-center">
                    {user.fname + " " + user.lname}
                  </td>
                  <td>{user.phoneNumber}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger mx-2">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* table end */}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default StaffList;
