import React from "react";
import { Chart } from "../components/Chart";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Header Section */}
      <div style={{ display: "flex", gap: "10px", justifyContent: "right" }}>
        {["Backlog", "To do", "Ongoing", "Done"].map((status, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch", // Makes both boxes align to the widest child
            }}
          >
            {/* Green Label */}
            <div
              style={{
                background: "#00FFD1",
                color: "#000",
                borderRadius: "10px 10px 0 0", // Rounded at the top
                padding: "5px 10px",
                fontSize: "2rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {status}
            </div>
            {/* White Number */}
            <div
              style={{
                background: "#FFF",
                color: "#000",
                borderRadius: "0 0 10px 10px", // Rounded at the bottom
                padding: "10px 20px",
                fontSize: "3rem",
                fontWeight: "bold",
                textAlign: "center",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              {[38, 1600, 8, 142][index]}
            </div>
          </div>
        ))}
      </div>



      {/* Main Content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          marginTop: "20px",
          gap: "20px",
        }}
      >
        {/* Left section: Graph */}
        <div
          style={{
            height: "700px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "white",
            borderRadius: "10px",
            fontSize: "1.2rem",
            fontStyle: "italic",
          }}
        >
          <div className='w-full bg-white my-16 p-4 rounded shadow-sm'>
            <h4 className='text-xl text-gray-600 font-semibold'>
              Chart by Priority
            </h4>
            <Chart />
          </div>
        </div>

        {/* Right section: Upcoming Tasks */}
        <div>
          <div
            style={{
              background: "#00FFD1",
              borderRadius: "10px",
              color: "#000",
              padding: "10px",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            Upcoming Task
          </div>
          <div style={{ marginTop: "10px" }}>
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "stretch", // Ensures equal height for children
                gap: "10px",
                background: "#F9F9F9",
                borderRadius: "10px",
                marginBottom: "10px",
                padding: "10px",
              }}
            >
              {/* Blue Bar */}
              <div
                style={{
                  background: "#0059FF",
                  color: "#FFF",
                  borderRadius: "10px 0 0 10px", // Rounded corners on the left
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "5px", // Fixed width for the blue bar
                }}
              >
              </div>
              {/* White Rectangle with Content */}
              <div
                style={{
                  flex: "1", // Ensures this takes up the remaining space
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  borderRadius: "0 10px 10px 0", // Rounded corners on the right
                }}
              >
                <div style={{ fontWeight: "bold" }}>Marketing Campaign 2</div>
                <div style={{ fontSize: "0.9rem", color: "#555" }}>Andrew Suryono</div>
                <div style={{ fontSize: "0.8rem", color: "#888" }}>
                  Public Relations
                  <p>16 Nov</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
