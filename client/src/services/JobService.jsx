import axios from "axios";

const API = `${import.meta.env.VITE_BACKEND_URL}/api/jobs`;

export const getJobs = async (filters) => {
  const res = await axios.get(API, { params: filters });
  return res.data;
};

export const createJob = async (jobData) => {
  const res = await axios.post(API, jobData);
  return res.data;
};
