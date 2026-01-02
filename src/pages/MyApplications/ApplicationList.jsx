import React, { use } from "react";
import { Link } from "react-router";

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);

  return (
    <div className="min-h-screen bg-[#0b0f1a] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              My Applications
            </h1>
            <p className="text-gray-400 mt-1">
              Showing{" "}
              <span className="text-blue-500 font-semibold">
                {applications.length}
              </span>{" "}
              active job submissions
            </p>
          </div>
          <Link
            to="/"
            className="w-fit px-6 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20 active:scale-95"
          >
            Browse New Jobs
          </Link>
        </div>

        {/* Professional Table Card */}
        <div className="bg-[#111827] border border-gray-800 shadow-2xl rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-800 bg-gray-900/40">
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                    Company & Role
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                    Office Address
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                    Job Type
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                    Status
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/60">
                {applications.length > 0 ? (
                  applications.map((app) => (
                    <tr
                      key={app._id}
                      className="hover:bg-blue-600/5 transition-all group"
                    >
                      {/* Company & Role Column */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gray-800 border border-gray-700 p-2 flex-shrink-0">
                            <img
                              src={app.company_logo}
                              alt={app.company}
                              className="w-full h-full object-contain"
                              onError={(e) =>
                                (e.target.src =
                                  "https://via.placeholder.com/40")
                              }
                            />
                          </div>
                          <div>
                            <div className="text-white font-bold group-hover:text-blue-400 transition-colors">
                              {app.title}
                            </div>
                            <div className="text-xs text-blue-500 font-medium uppercase tracking-tight">
                              {app.company}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Address Column */}
                      <td className="px-6 py-5">
                        <div className="flex items-start gap-2 max-w-[200px]">
                          <span className="text-blue-500 mt-1">📍</span>
                          <div>
                            <div className="text-gray-200 text-sm font-medium leading-tight">
                              {app.location || "Location TBD"}
                            </div>
                            <div className="text-xs text-gray-500 mt-1 italic">
                              {app.category} Dept.
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Job Type Column */}
                      <td className="px-6 py-5">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/10 text-blue-400 border border-blue-600/20">
                          {app.jobType}
                        </span>
                      </td>

                      {/* Status Badge Column */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full animate-pulse ${
                              app.status === "active"
                                ? "bg-green-500"
                                : "bg-yellow-500"
                            }`}
                          ></span>
                          <span className="text-sm text-gray-300 capitalize">
                            {app.status || "Pending"}
                          </span>
                        </div>
                      </td>

                      {/* Action Column */}
                      <td className="px-6 py-5 text-right">
                        <div className="flex justify-end items-center gap-3">
                          <a
                            href={app.resume}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white transition-colors"
                            title="View Resume"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </a>
                          <button
                            className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg text-red-500 transition-colors"
                            title="Withdraw Application"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-32 text-center">
                      <div className="flex flex-col items-center opacity-50">
                        <div className="text-6xl mb-4">📂</div>
                        <h3 className="text-xl font-bold text-white">
                          No applications yet
                        </h3>
                        <p className="text-gray-400">
                          Applications you submit will appear here.
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationList;
