const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    companyName: { type: String, required: true },
    location: { type: String, required: true },
    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract", "Internship"],
      required: true,
    },
    salaryRange: { type: String },
    description: { type: String },
    requirements: { type: String },
    responsibilities: { type: String },
    applicationDeadline: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
