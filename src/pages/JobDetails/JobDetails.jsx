import React from "react";
import { useLoaderData, Link } from "react-router";

const JobDetails = () => {
  const {
    _id,
    title,
    company,
    company_logo,
    location,
    jobType,
    salaryRange: { min, max, currency },
    description,
    requirements,
  } = useLoaderData();

  return (
    <div className="min-h-screen bg-[#0b0f1a] py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Main Content Card */}
        <div className="bg-[#111827] border border-gray-800 shadow-2xl rounded-3xl overflow-hidden transition-all hover:border-blue-500/50">
          {/* Top Header Section */}
          <div className="p-8 md:p-12 border-b border-gray-800 bg-gradient-to-br from-[#111827] to-[#1a2234]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <figure className="bg-gray-800 p-3 rounded-2xl w-20 h-20 flex items-center justify-center border border-gray-700 shadow-inner">
                  <img
                    src={company_logo}
                    alt={company}
                    className="object-contain"
                  />
                </figure>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-gray-400">
                    <span className="flex items-center gap-1.5 font-semibold text-blue-400">
                      🏢 {company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      📍 {location}
                    </span>
                    <span className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-500/20">
                      {jobType}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-left md:text-right">
                <p className="text-3xl font-black text-blue-500">
                  {currency === "bdt" ? "৳" : "$"}
                  {max}
                </p>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-widest mt-1">
                  {min} - {max} / Monthly
                </p>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column: Description & Skills */}
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h3 className="text-xl font-bold text-gray-100 mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                  Job Description
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg italic border-l-2 border-gray-800 pl-6">
                  {description}
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-100 mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                  Key Requirements
                </h3>
                <div className="flex flex-wrap gap-3">
                  {requirements.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-800/50 text-gray-300 px-5 py-2 rounded-xl text-sm font-medium border border-gray-700 hover:border-blue-500 hover:bg-gray-800 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column: Sticky Sidebar / Call to Action */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800/30 border border-gray-800 rounded-2xl p-6 sticky top-6">
                <h4 className="text-white font-bold mb-4">Quick Summary</h4>
                <ul className="space-y-4 text-sm text-gray-400 mb-8">
                  <li className="flex justify-between border-b border-gray-800 pb-2">
                    <span>Post Date</span>
                    <span className="text-gray-200">3 Days Ago</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-800 pb-2">
                    <span>Experience</span>
                    <span className="text-gray-200">2-4 Years</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-800 pb-2">
                    <span>Working Hours</span>
                    <span className="text-gray-200">Full-time</span>
                  </li>
                </ul>

                <Link
                  to={`/jobApply/${_id}`}
                  className="block w-full text-center bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-900/20 hover:shadow-blue-600/40 transition-all active:scale-95 uppercase tracking-widest text-sm"
                >
                  Apply For This Position
                </Link>
                <p className="text-center text-xs text-gray-600 mt-4">
                  By applying, you agree to our Terms of Service.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="mt-8 flex justify-center">
          <Link
            to="/"
            className="text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-2 font-medium"
          >
            ← Back to All Jobs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
