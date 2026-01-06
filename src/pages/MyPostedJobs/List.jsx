import React, { use } from "react";

const List = ({ jobsCreatedByPromise }) => {
  const applications = use(jobsCreatedByPromise);

  // Calculate statistics safely
  const stats = (applications || []).reduce((acc, app) => {
    if (app.job_id) {
      acc[app.job_id] = (acc[app.job_id] || 0) + 1;
    }
    return acc;
  }, {});

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header - Simple & Professional */}
      <div className="mb-8 border-b border-gray-800 pb-6">
        <h1 className="text-2xl font-semibold text-white">
          Application Management
        </h1>
        <p className="text-gray-400 text-sm mt-2">
          My Total Application:{" "}
          <span className="text-white">{applications?.length || 0}</span>
        </p>
      </div>

      {/* Table Container - Clean Design */}
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
                <th className="px-6 py-4 font-medium text-gray-400 text-center">
                  Total Apps
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
                    {/* Applicant Info */}
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

                    {/* Job Reference with fix for .slice() error */}
                    <td className="px-6 py-4">
                      <div className="text-gray-300">{app.title}</div>
                      <div className="text-[10px] text-gray-500 font-mono mt-1 uppercase">
                        ID: {app.job_id ? app.job_id.slice(-8) : "N/A"}
                      </div>
                    </td>

                    {/* Stats */}
                    <td className="px-6 py-4 text-center">
                      <span className="text-white font-medium">
                        {stats[app.job_id] || 0}
                      </span>
                    </td>

                    {/* Action - Simple Button */}
                    <td className="px-6 py-4 text-right">
                      <a
                        href={app.resume}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block px-4 py-1.5 border border-gray-700 text-gray-300 rounded hover:bg-white hover:text-black transition-all text-xs"
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
