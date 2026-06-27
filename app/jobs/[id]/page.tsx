import {SaveButton} from "../SaveButton";
import {getJobs,getJobById} from "../../../src/lib/jobs"
import { notFound } from "next/navigation";


export async function generateStaticParams() {
    const jobs = await getJobs();
    return jobs.map((job) => ({ id: job.id }));
}

type Props = {
    params : Promise<{ id: string }>
}

export default async  function JobDetailPage({params}:Props) {
    const { id } = await params;
    const job = await getJobById(id);
      if (!job) notFound();

    return (
       <main>
      <h1>{job.title}</h1>
      <p>{job.company} — {job.location}</p>
      <p>{job.description}</p>
      <SaveButton />
    </main>
    );
}