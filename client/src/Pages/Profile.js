import React, { useEffect } from "react";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import axios from "axios";
import { useAppContext } from "../Context/appContext";
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

const Profile = () => {
  const { user: userData, setUser } = useAppContext();

  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState(initialState);

  const handleEdit = () => {
    setFormData(userData);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      response = await axios.patch(
        `http://localhost:8000/api/user/${formData._id}`,
        formData
      );
      const { user } = response.data;
      console.log(user);
      setUser(user);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

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
  return (
    <div>
      <h4
        className="w-full  d-flex align-items-center ps-4"
        style={{
          height: "78px",
          fontWeight: "500",
          color: "white",
          backgroundColor: "#212529",
        }}
      >
        Profile
      </h4>
      <div className="container d-flex justify-content-center mt-5">
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
                      maxLength="10"
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
                    <input
                      className="form-control"
                      name="role"
                      disabled
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                    >
                      {/* <option value="none" selected disabled hidden>
                        Select role
                      </option>
                      <option value="user">User</option>
                      <option value="staff">Staff</option>
                      <option value="admin">Administrator</option> */}
                    </input>
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
                      disabled
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
        <div className="form-container border border-2 border-light-subtle  pt-4 p-5 rounded shadow-sm bg-light">
          <h2 className="text-center fw-bold p-3 ps-0 ">
            {userData?.role[0]?.toUpperCase() + userData?.role?.slice(1)}
          </h2>

          {/* input fields start */}
          <div className="">
            <div className="d-flex flex-row mt-3">
              <div className="mb-1" style={{ width: "250px" }}>
                <label className="px-1 pb-1">Full Name</label>
              </div>
              <div className="mb-1 ms-4" style={{ width: "250px" }}>
                <label className="px-1 pb-1">
                  {userData?.fname + " " + userData?.lname}
                </label>
              </div>
            </div>
            <div className="d-flex flex-row mt-3">
              <div className="mb-1" style={{ width: "250px" }}>
                <label className="px-1 pb-1">Email</label>
              </div>
              <div className="mb-1 ms-4" style={{ width: "250px" }}>
                <label className="px-1 pb-1">{userData?.email}</label>
              </div>
            </div>

            <div className="d-flex flex-row mt-3">
              <div className="mb-1" style={{ width: "250px" }}>
                <label className="px-1 pb-1">Date Of Birth</label>
              </div>
              <div className="mb-1 ms-4" style={{ width: "250px" }}>
                <label className="px-1 pb-1">{userData?.dob}</label>
              </div>
            </div>
            <div className="d-flex flex-row mt-3">
              <div className="mb-1" style={{ width: "250px" }}>
                <label className="px-1 pb-1">Gender</label>
              </div>
              <div className="mb-1 ms-4" style={{ width: "250px" }}>
                <label className="px-1 pb-1">
                  {userData?.gender[0].toUpperCase() +
                    userData?.gender.slice(1)}
                </label>
              </div>
            </div>
            <div className="d-flex flex-row mt-3">
              <div className="mb-1" style={{ width: "250px" }}>
                <label className="px-1 pb-1">Phone Number</label>
              </div>
              <div className="mb-1 ms-4" style={{ width: "250px" }}>
                <label className="px-1 pb-1">{userData?.phoneNumber}</label>
              </div>
            </div>
          </div>

          <div className="d-grid justify-content-center mt-4">
            <button
              type="submit"
              className="btn btn-primary fw-bold"
              style={{ width: "300px" }}
              onClick={() => handleEdit()}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
