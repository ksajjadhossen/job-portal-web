import React from "react";
import { use } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { Suspense } from "react";
import { jobsCreatedByPromise } from "../../api/JobsApi";
import List from "./List";

const MyPostedJobs = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      <Suspense fallback="Please wait...">
        <List jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></List>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
