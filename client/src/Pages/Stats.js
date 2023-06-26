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
        className="w-full  d-flex align-items-center ps-4 "
        style={{
          height: "78px",
          fontWeight: "500",
          color: "white",
          backgroundColor: "#212529",
        }}
      >
        Stats
      </h4>
      <div className="container d-flex  justify-content-center mt-5  gap-5 mt-5 pt-3">
        <div
          className="form-container border border-2 border-light-subtle p-5  shadow-sm  mx-5 my-5"
          style={{
            width: "400px",
            height: "400px",
            backgroundColor: "#212529",
            borderRadius: "15px",
          }}
        >
          <div
            className=" text-center pt-4"
            style={{
              fontSize: "100px",
              fontWeight: "bold",
              color: "cadetblue",
            }}
          >
            {stats.userCount}
          </div>
          <div
            className="text-center"
            style={{ fontSize: "50px", fontWeight: "bold", color: "cadetblue" }}
          >
            Users
          </div>
        </div>
        <div
          className="form-container border border-2 border-light-subtle p-5  shadow-sm mx-5 my-5"
          style={{
            width: "400px",
            height: "400px",
            backgroundColor: "#212529",
            borderRadius: "15px",
          }}
        >
          <div
            className=" text-center pt-4"
            style={{
              fontSize: "100px",
              fontWeight: "bold",
              color: "cadetblue",
            }}
          >
            {stats.staffCount}
          </div>
          <div
            className=" text-center"
            style={{ fontSize: "50px", fontWeight: "bold", color: "cadetblue" }}
          >
            Staff
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
