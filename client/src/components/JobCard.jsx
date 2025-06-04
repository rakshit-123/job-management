import { FaUser } from "react-icons/fa";
import amazonLogo from "../assets/amazonLogo.jpg";

const JobCard = ({ job }) => {
  const descriptionLines = job.description
    ? job.description.split("\n").filter((line) => line.trim() !== "")
    : [];

  return (
    <div
      style={{
        width: "316px",
        height: "360px",
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        //padding: "16px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "#1A1A1A",
      }}
    >
      {/* Top Section: Logo and Time */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img
          src={job.logo || amazonLogo}
          alt="Company Logo"
          style={{ width: "66px", height: "66px", borderRadius: "8px" }}
        />
        <div
          style={{
            backgroundColor: "#B0D9FF",
            padding: "6px 12px",
            borderRadius: "6px",
            fontSize: "14px",
            fontWeight: "500",
            color: "#666",
            height: "fit-content",
          }}
        >
          {job.postedTime || "24h ago"}
        </div>
      </div>

      <div>
        <h3
          style={{ fontSize: "18px", fontWeight: "700", marginBottom: "4px" }}
        >
          {job.title || "Frontend Developer"}
        </h3>
        <p style={{ fontSize: "14px", fontWeight: "500", color: "#555" }}>
          {job.companyName || "Company"} — {job.location || "Location"}
        </p>

        <div
          style={{
            display: "flex",
            gap: "8px",
            fontSize: "14px",
            margin: "8px 0",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <FaUser />
            <span>{job.experience || "1-3 yr Exp"}</span>
          </div>
          <span>• {job.mode || "Onsite"}</span>
          <span>• {job.salary || "12 LPA"}</span>
        </div>

        {descriptionLines.length > 0 && (
          <ul
            style={{
              paddingLeft: "18px",
              marginTop: "8px",

              color: "#444",
            }}
          >
            {descriptionLines.map((line, index) => (
              <li key={index} style={{ fontSize: "13px", marginBottom: "4px" }}>
                {line}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Button */}
      <button
        style={{
          marginTop: "0px",
          width: "100%",
          height: "40px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#00AAFF",
          color: "white",
          fontWeight: "600",
          fontSize: "14px",
          cursor: "pointer",
        }}
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
