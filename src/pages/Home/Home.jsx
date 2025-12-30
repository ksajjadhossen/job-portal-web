import React from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";
import { Suspense } from "react";

const Home = () => {
  const jobsPromise = fetch("http://localhost:3000/jobs").then((data) =>
    data.json()
  );
  return (
    <>
      <Banner></Banner>
      <Suspense fallback={<h1>Loading Data...</h1>}>
        <HotJobs jobsPromise={jobsPromise} />
      </Suspense>
    </>
  );
};

export default Home;
