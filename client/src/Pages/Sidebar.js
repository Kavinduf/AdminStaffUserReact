import React, { useEffect } from "react";
import { IoMdStats } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { FaUser, FaUserTie } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { useAppContext } from "../Context/appContext";
import { useNavigate, NavLink } from "react-router-dom";
const styleActive = "d-flex flex-row sidebar-btn linkActive";
const style = "d-flex flex-row sidebar-btn";
const Sidebar = () => {
  const { removeUser, user } = useAppContext();
  const navigate = useNavigate();

  const logout = () => {
    removeUser();
    navigate("/login");
  };
  return (
    <div
      style={{
        width: "250px",
        backgroundColor: "#212529",
        minHeight: "100vh",
      }}
    >
      <div
        className="py-4 px-4 gap-2 d-grid"
        style={{
          // marginTop: "200px",

          width: "250px",
          maxHeight: "100vh",
          height: "100%",
          alignContent: "space-between",
          alignItems: "space-between",
        }}
      >
        <div
          className="d-grid gap-3"
          style={{
            alignContent: "start",
            alignItems: "start",
          }}
        >
          <div className="heading">ASU</div>
          <div className="line"></div>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? styleActive : style)}
          >
            <div>
              <IoMdStats />
            </div>
            <div className="ps-2">Stats</div>
          </NavLink>
          <NavLink
            to={"/profile"}
            className={({ isActive }) => (isActive ? styleActive : style)}
          >
            <div>
              <MdAccountCircle />
            </div>
            <div className="ps-2">Profile</div>
          </NavLink>
          {user?.role !== "user" && (
            <NavLink
              to={"/user-list"}
              className={({ isActive }) => (isActive ? styleActive : style)}
            >
              <div>
                <FaUser />
              </div>
              <div className="ps-2">User List</div>
            </NavLink>
          )}
          {user?.role === "admin" && (
            <NavLink
              to={"/staff-list"}
              className={({ isActive }) => (isActive ? styleActive : style)}
            >
              <div>
                <FaUserTie />
              </div>
              <div className="ps-2">Staff List</div>
            </NavLink>
          )}
        </div>
        <div className="d-flex flex-row sidebar-btn align-self-end mt-auto">
          <div>
            <BiLogOut />
          </div>
          <div className="ps-2 " onClick={logout}>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
