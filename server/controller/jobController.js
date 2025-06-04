const Job = require("../model/jobModel");

// @desc Get all jobs with optional filters
const getJobs = async (req, res) => {
  const query = {};

  if (req.query.title) query.title = new RegExp(req.query.title, "i");
  if (req.query.location) query.location = new RegExp(req.query.location, "i");
  if (req.query.jobType) query.jobType = req.query.jobType;

  const jobs = await Job.find(query);
  res.json(jobs);
};

// @desc Create a new job
const createJob = async (req, res) => {
  const newJob = new Job(req.body);
  const savedJob = await newJob.save();
  res.status(201).json(savedJob);
};

module.exports = { getJobs, createJob };
