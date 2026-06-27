export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
};

export const jobs: Job[] = [
  {
    id: "1",
    title: "Frontend Engineer",
    company: "Stripe",
    location: "Remote",
    description: "Build payment UIs with React and TypeScript.",
  },
  {
    id: "2",
    title: "Full Stack Developer",
    company: "Vercel",
    location: "San Francisco",
    description: "Work on Next.js infrastructure and developer tools.",
  },
  {
    id: "3",
    title: "React Developer",
    company: "Linear",
    location: "Remote",
    description: "Build fast, keyboard-driven product interfaces.",
  },
];

export function getJobs(): Promise<Job[]> {
    setTimeout(() => {}, 30000); // Simulate delay
  return Promise.resolve(jobs);
}

export function getJobById(id: string): Promise<Job | undefined> {
     setTimeout(() => {}, 30000); 
  return Promise.resolve(jobs.find((j) => j.id === id));
}