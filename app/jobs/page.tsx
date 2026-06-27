import { getJobs } from "../../src/lib/jobs";

export const dynamic = "force-dynamic"; // ← tells Next.js: re-fetch on every request

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <main>
      <h1>All Jobs</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <a href={`/jobs/${job.id}`}>
              <strong>{job.title}</strong> at {job.company} — {job.location}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}