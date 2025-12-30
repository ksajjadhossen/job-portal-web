import React from "react";
import { Link } from "react-router";

function JobApply() {
  return (
    <>
      <div className="text-4xl">JobApply</div>
      <p>HIsd</p>
      <Link className="btn btn-primary" to={`/jobApply/$`}>
        {" "}
        apply
      </Link>
    </>
  );
}

export default JobApply;
