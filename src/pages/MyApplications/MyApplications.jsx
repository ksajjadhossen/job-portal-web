import React from "react";
import ApplicationStates from "./ApplicationStates";
import ApplicationList from "./ApplicationList";
import { Suspense } from "react";
import { use } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { myApplicationsPromise } from "../../api/ApplicationsApi";

const MyApplications = () => {
  const { user } = use(AuthContext);
  return (
    <>
      <ApplicationStates></ApplicationStates>
      <Suspense fallback={"Loading your applications"}>
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </>
  );
};

export default MyApplications;
