import { useState } from "react";

const JobForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    companyName: "",
    location: "",
    jobType: "",
    salaryMin: "",
    salaryMax: "",
    description: "",
    applicationDeadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePublish = () => {
    const finalData = {
      title: formData.title,
      companyName: formData.companyName,
      location: formData.location,
      jobType:
        formData.jobType === "FullTime"
          ? "Full-time"
          : formData.jobType === "PartTime"
          ? "Part-time"
          : formData.jobType === "Freelance"
          ? "Contract"
          : formData.jobType,
      salary: `₹${formData.salaryMin} - ₹${formData.salaryMax}`,
      description: formData.description,
      applicationDeadline: formData.applicationDeadline,
    };

    onSubmit(finalData);
  };

  const selectStyle = {
    width: "100%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #bcbcbc",
    color: "#555",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    backgroundColor: "#fff",
    backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='gray' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 8px center",
    backgroundSize: "16px 16px",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #bcbcbc",
  };

  const buttonStyle = {
    height: "59px",
    borderRadius: "10px",
    padding: "16px 60px",
    gap: "10px",
    fontSize: "16px",
    fontWeight: "600",
    border: "1.5px solid #000",
    cursor: "pointer",
  };

  return (
    <div style={{ padding: "117px 296px", marginTop: "-200px" }}>
      <div
        style={{
          width: "848px",
          borderRadius: "16px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#FFFFFF",
          paddingBottom: "20px",
          height: "779px",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        <div
          style={{
            padding: "30px 250px",
            fontWeight: 700,
            fontSize: "20px",
            fontFamily: "Satoshi Variable",
          }}
        >
          Create Job Opening
        </div>

        {/* First Row */}
        <div style={{ paddingTop: "59px", display: "flex", gap: "6px" }}>
          <div style={{ height: "91px", width: "376px" }}>
            <h1 style={{ fontSize: "16px" }}>Location</h1>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              style={selectStyle}
            >
              <option value="" disabled>
                Choose Preferred Location
              </option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Chennai">Chennai</option>
            </select>
          </div>

          <div style={{ height: "91px", width: "376px" }}>
            <h1 style={{ fontSize: "16px" }}>Job Type</h1>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              style={selectStyle}
            >
              <option value="" disabled>
                Select Job Type
              </option>
              <option value="FullTime">Full Time</option>
              <option value="PartTime">Part Time</option>
              <option value="Internship">Internship</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>
        </div>

        {/* Second Row */}
        <div style={{ paddingTop: "6px", display: "flex", gap: "6px" }}>
          <div style={{ height: "91px", width: "376px" }}>
            <h1 style={{ fontSize: "16px" }}>Job Title</h1>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div style={{ height: "91px", width: "376px" }}>
            <h1 style={{ fontSize: "16px" }}>Company Name</h1>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Amazon Swiggy Zomato"
              style={inputStyle}
            />
          </div>
        </div>

        {/* Third Row */}
        <div style={{ paddingTop: "6px", display: "flex", gap: "6px" }}>
          <div style={{ width: "376px" }}>
            <h1 style={{ fontSize: "16px" }}>Salary Range</h1>
            <div style={{ display: "flex", gap: "6px" }}>
              <input
                type="number"
                name="salaryMin"
                placeholder="₹0"
                value={formData.salaryMin}
                onChange={handleChange}
                style={{ ...inputStyle, width: "50%" }}
              />
              <input
                type="number"
                name="salaryMax"
                placeholder="₹12,00,000"
                value={formData.salaryMax}
                onChange={handleChange}
                style={{ ...inputStyle, width: "50%" }}
              />
            </div>
          </div>

          <div style={{ width: "376px" }}>
            <h1 style={{ fontSize: "16px" }}>Application Deadline</h1>
            <input
              type="date"
              name="applicationDeadline"
              value={formData.applicationDeadline}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
        </div>

        {/* Description */}
        <div style={{ paddingTop: "20px" }}>
          <h1 style={{ fontSize: "16px", marginBottom: "8px" }}>
            Job Description
          </h1>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder={`List each point on a new line.\nExample:\n• Proficiency in JavaScript\n• Experience with React\n• Familiar with REST APIs`}
            style={{
              width: "768px",
              height: "169px",
              borderRadius: "10px",
              border: "1px solid #bcbcbc",
              padding: "10px",
              fontSize: "14px",
              resize: "none",
              fontFamily: "inherit",
              whiteSpace: "pre-wrap",
            }}
          ></textarea>
        </div>

        {/* Buttons */}
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "space-between",
            width: "768px",
          }}
        >
          <button
            type="button"
            style={{
              ...buttonStyle,
              width: "232px",
              backgroundColor: "#fff",
              color: "#000",
            }}
            onClick={() => alert("Draft feature not implemented yet")}
          >
            Save Draft
          </button>

          <button
            type="button"
            onClick={handlePublish}
            style={{
              ...buttonStyle,
              width: "207px",
              backgroundColor: "#00AAFF",
              color: "#fff",
            }}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
