import React from "react";
import { Link } from "react-router";

const JobCard = ({ job }) => {
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
  } = job;

  return (
    <div className="card bg-[#111827] border border-gray-800 shadow-2xl hover:border-blue-500 transition-all p-6 rounded-2xl h-full flex flex-col group">
      {/* Header: Logo and Company Info */}
      <div className="flex items-center gap-3 mb-4">
        <figure className="bg-gray-800 p-2 rounded-lg w-14 h-14 flex items-center justify-center border border-gray-700">
          <img src={company_logo} alt={company} className="object-contain" />
        </figure>
        <div>
          <h4 className="text-xl font-bold text-white leading-none mb-1 group-hover:text-blue-400 transition-colors">
            {company}
          </h4>
          <p className="flex items-center text-gray-400 text-sm">
            <span className="mr-1 text-blue-500">📍</span> {location}
          </p>
        </div>
      </div>

      {/* Job Title */}
      <h2 className="text-2xl font-bold text-gray-100 mb-2">Job: {title}</h2>

      {/* Job Meta: Type and Time */}
      <div className="flex gap-4 mb-4 text-gray-500 text-sm font-medium">
        <div className="flex items-center gap-1">
          <span className="text-blue-500">💼</span> {jobType}
        </div>
        <div className="flex items-center gap-1">
          <span className="text-blue-500">🕒</span> 3 days ago
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 mb-6 line-clamp-2 flex-grow leading-relaxed">
        {description}
      </p>

      {/* Requirements Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {requirements.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-800 text-gray-300 px-3 py-1 rounded-md text-sm font-semibold border border-gray-700 hover:border-blue-500 hover:text-white transition-all cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer: Salary and Action */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-800 mt-auto">
        <div>
          <p className="text-2xl font-bold text-blue-500 leading-none">
            {currency === "bdt" ? "৳" : "$"}
            {max}
          </p>
          <p className="text-gray-500 text-xs font-bold uppercase mt-1 tracking-widest">
            {min} - {max} / Month
          </p>
        </div>
        <Link
          to={`/jobs/${_id}`}
          className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all active:scale-95"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
