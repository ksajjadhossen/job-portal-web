import React, { use } from "react";
import { Link } from "react-router";

const List = ({ jobsCreatedByPromise }) => {
  const applications = use(jobsCreatedByPromise);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8 border-b border-gray-800 pb-6">
        <h1 className="text-2xl font-semibold text-white">
          Application Management
        </h1>
        <p className="text-gray-400 text-sm mt-2">
          My Total Application:{" "}
          <span className="text-white">{applications?.length || 0}</span>
        </p>
      </div>

      <div className="bg-[#111827] border border-gray-800 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-900/50">
                <th className="px-6 py-4 font-medium text-gray-400">
                  Applicant
                </th>
                <th className="px-6 py-4 font-medium text-gray-400">
                  Job Title
                </th>
                {/* Changed Header */}
                <th className="px-6 py-4 font-medium text-gray-400 text-center">
                  Action
                </th>
                <th className="px-6 py-4 font-medium text-gray-400 text-right">
                  Resume
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {applications && applications.length > 0 ? (
                applications.map((app) => (
                  <tr
                    key={app._id}
                    className="hover:bg-gray-800/30 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="text-white font-medium">
                        {app.applicant}
                      </div>
                      <div className="flex gap-3 mt-1 text-xs">
                        <a
                          href={app.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-500 hover:text-white"
                        >
                          GitHub
                        </a>
                        <a
                          href={app.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-500 hover:text-white"
                        >
                          LinkedIn
                        </a>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <div className="text-gray-300">{app.title}</div>
                      <div className="text-[10px] text-gray-500 font-mono mt-1 uppercase">
                        ID: {app.job_id ? app.job_id.slice(-8) : "N/A"}
                      </div>
                    </td>

                    {/* New "View Applications" Link */}
                    <td className="px-6 py-4 text-center">
                      <Link
                        to={`/applications/${app._id}`}
                        className="text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-blue-400/30"
                      >
                        View Applications
                      </Link>
                    </td>

                    <td className="px-6 py-4 text-right">
                      <a
                        href={app.resume}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block px-4 py-1.5 border border-gray-800 text-gray-300 rounded hover:bg-white hover:text-black transition-all text-xs"
                      >
                        Review CV
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    No applications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default List;
