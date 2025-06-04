import { Button, Text } from "@mantine/core";
import { FiSearch, FiMapPin, FiUsers } from "react-icons/fi";
import logo from "../assets/cmwlogo.png";
import Vector5 from "../assets/Vector5.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ onFilterChange }) => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    title: "",
    location: "",
    jobType: "",
  });

  const handleInputChange = (e) => {
    const newFilters = { ...filters, [e.target.name]: e.target.value };
    setFilters(newFilters);
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  const handleCreateJobClick = () => {
    navigate("/create");
  };

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        width: "100%",
        height: "214px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* BLOCK 1: Top Navbar */}
      <div
        style={{
          width: "838px",
          height: "48px",
          backgroundColor: "#FFFFFF",
          borderRadius: "40px",
          display: "flex",
          justifyContent: "center",
          border: "1px solid #FCFCFC",
          boxShadow: "0px 4px 8px rgba(198, 191, 191, 0.6)",
          marginTop: "21px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              flex: 1,
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ width: "44px", height: "44.68px" }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flex: 1,
                fontFamily: "Satoshi Variable",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              {[
                "Home",
                "Find jobs",
                "Find Talents",
                "About us",
                "Testimonials",
              ].map((item, idx) => (
                <Text
                  key={idx}
                  style={{
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "100%",
                  }}
                >
                  {item}
                </Text>
              ))}
            </div>
          </div>

          <Button
            style={{
              backgroundColor: "#A128BF",
              color: "white",
              borderRadius: "50px",
              width: "133px",
              height: "38px",
              padding: "5px 5px",
              fontWeight: 200,
              marginLeft: "40px",
              marginBottom: "10px",
            }}
            onClick={handleCreateJobClick}
          >
            Create Jobs
          </Button>
        </div>
      </div>

      {/* BLOCK 2: Filter Inputs */}
      <div
        style={{
          width: "100%",
          height: "113px",
          maxWidth: "1440px",
          display: "flex",
          gap: "1px",
        }}
      >
        {/* Title */}
        <div style={{ flex: 1, position: "relative" }}>
          <div style={{ ...styles.filterBox, marginTop: "35px" }}>
            <FiSearch size={15} color="#686868" />
            <input
              type="text"
              name="title"
              value={filters.title}
              onChange={handleInputChange}
              placeholder="Search by Job, Title, Role"
              style={styles.input}
            />
          </div>
          <div style={styles.divider} />
        </div>

        {/* Location */}
        <div style={{ flex: 1, position: "relative" }}>
          <div style={{ ...styles.filterBox, marginTop: "35px" }}>
            <FiMapPin size={15} color="#686868" />
            <input
              type="text"
              name="location"
              value={filters.location}
              onChange={handleInputChange}
              placeholder="Preferred Location"
              style={styles.input}
            />
          </div>
          <div style={styles.divider} />
        </div>

        {/* Job Type */}
        <div style={{ flex: 1, position: "relative" }}>
          <div style={{ ...styles.filterBox, marginTop: "35px" }}>
            <FiUsers size={15} color="#686868" />
            <select
              name="jobType"
              value={filters.jobType}
              onChange={handleInputChange}
              style={{
                ...styles.input,
                padding: "5px 2px",
                background: "transparent",
              }}
            >
              <option value="">Job Type</option>
              <option value="Onsite">contract</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="FullTime">Full Time</option>
              <option value="Internship">internship</option>
            </select>
          </div>
          <div style={styles.divider} />
        </div>

        {/* Salary Static Display */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "2px",
              marginLeft: "64px",
              marginTop: "30px",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                color: "#555",
                fontFamily: "satoshi variable",
                fontWeight: "bold",
              }}
            >
              Salary per Month&nbsp;
              <span style={{ fontWeight: "bold" }}>₹50k - ₹80k</span>
            </div>
            <img
              src={Vector5}
              alt="Vector"
              style={{
                width: "168.5px",
                height: "1px",
                marginTop: "16px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  filterBox: {
    height: "40px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "64px",
    gap: "6px",
    fontSize: "15px",
  },
  input: {
    border: "none",
    borderBottom: "1px solid #EAEAEA",
    outline: "none",
    fontSize: "14px",
    width: "100%",
    background: "transparent",
  },
  divider: {
    position: "absolute",
    right: 0,
    top: "40px",
    width: "1px",
    height: "48px",
    backgroundColor: "#EAEAEA",
  },
};

export default Navbar;
