import { useEffect, useState } from "react";
import { getJobs } from "../services/JobService";
import JobCard from "../components/JobCard";
import Navbar from "../components/Navbar";

export default function JobListPage() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filters, setFilters] = useState({
    title: "",
    location: "",
    jobType: "",
  });

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getJobs();
      setJobs(data);
      setFilteredJobs(data);
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const titleMatch = job.title
        ?.toLowerCase()
        .includes(filters.title.toLowerCase());
      const locationMatch = job.location
        ?.toLowerCase()
        .includes(filters.location.toLowerCase());
      const jobTypeMatch = filters.jobType
        ? job.mode?.toLowerCase() === filters.jobType.toLowerCase()
        : true;

      return titleMatch && locationMatch && jobTypeMatch;
    });

    setFilteredJobs(filtered);
  }, [filters, jobs]);

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <Navbar onFilterChange={setFilters} />

      <div
        style={{
          paddingLeft: "16px",
          paddingTop: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 316px)",
          gap: "16px",
          width: "1312px",
          margin: "0 auto",
        }}
      >
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job._id} job={job} />)
        ) : (
          <div>No jobs found.</div>
        )}
      </div>
    </div>
  );
}
