import { Container } from "@mantine/core";
import JobForm from "../components/JobForm";
import { createJob } from "../services/JobService";

export default function CreateJobPage() {
  const handleSubmit = async (formData) => {
    await createJob(formData);
    alert("Job created!");
  };

  return (
    <Container size="sm">
      <JobForm onSubmit={handleSubmit} />
    </Container>
  );
}
