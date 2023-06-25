import React from "react";

const Sidebar = () => {
  return (
    <div
      className="py-2 px-4"
      style={{
        width: "200px",
        backgroundColor: "gray",
        minHeight: "100vh",
      }}
    >
      <div>Stats</div>
      <div>User List</div>
    </div>
  );
};

export default Sidebar;
