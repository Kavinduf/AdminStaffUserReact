import axios from "axios";
import React, { useEffect, useState } from "react";

const Stats = () => {
  const [stats, setStats] = useState({
    userCount: 0,
    staffCount: 0,
  });

  useEffect(() => {
    const init = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/stats");
        const { userCount, staffCount } = response.data;
        setStats({
          userCount,
          staffCount,
        });
      } catch (error) {
        console.log(error);
      }
    };

    init();
  }, []);
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
        Stats
      </h4>
      <div>{stats.userCount}</div>
      <div>Users</div>
      <div>{stats.staffCount}</div>
      <div>Staff</div>
    </div>
  );
};

export default Stats;
