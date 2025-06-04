import { Routes, Route, Link } from "react-router-dom";
import JobListPage from "./pages/JobListPage";
import CreateJobPage from "./pages/CreateJobPage";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<JobListPage />} />
        <Route path="/create" element={<CreateJobPage />} />
      </Routes>
    </div>
  );
}
