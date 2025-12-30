import React from "react";
import { use } from "react";
import JobCard from "../../shared/JobCard";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center my-8 uppercase border-b-2 pb-3">
        Hot jobs of the day
      </h1>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
