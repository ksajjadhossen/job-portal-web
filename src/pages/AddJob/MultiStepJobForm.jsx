import React, { useState } from "react";

const MultiStepJobForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    jobType: "Full-Time",
    category: "",
    applicationDeadline: "",
    salaryRange: { min: 0, max: 0, currency: "bdt" },
    description: "",
    company: "",
    requirements: "",
    responsibilities: "",
    hr_email: "",
    hr_name: "",
    company_logo: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      requirements: formData.requirements.split(",").map((s) => s.trim()),
      responsibilities: formData.responsibilities
        .split(",")
        .map((s) => s.trim()),
    };
    console.log("Final Job Data:", finalData);
    alert("Job Posted Successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-200 rounded-xl shadow-xl my-10">
      {/* --- Progress Stats Header --- */}
      <div className="flex items-center w-full justify-center mb-10">
        <div className="stats shadow bg-base-100 w-full">
          <div className={`stat ${step >= 1 ? "text-primary" : ""}`}>
            <div className="stat-title">Step 1</div>
            <div className="stat-value text-2xl">Basics</div>
          </div>
          <div className={`stat ${step >= 2 ? "text-secondary" : ""}`}>
            <div className="stat-title">Step 2</div>
            <div className="stat-value text-2xl">Details</div>
          </div>
          <div className={`stat ${step === 3 ? "text-accent" : ""}`}>
            <div className="stat-title">Step 3</div>
            <div className="stat-value text-2xl">HR Info</div>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-base-100 p-10 rounded-lg shadow-sm"
      >
        {/* STEP 1: BASIC INFO */}
        {step === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
            <h2 className="col-span-2 text-2xl font-bold mb-2 border-b pb-2">
              Job Basics
            </h2>

            <div className="form-control w-full">
              <label htmlFor="title" className="label font-semibold">
                Job Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="Enter Job Title"
                className="input input-bordered focus:input-primary"
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                value={formData.title}
              />
            </div>

            <div className="form-control w-full">
              <label htmlFor="location" className="label font-semibold">
                Location
              </label>
              <input
                id="location"
                type="text"
                placeholder="Enter Job Location"
                className="input input-bordered focus:input-primary"
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                value={formData.location}
              />
            </div>

            <div className="form-control w-full">
              <label htmlFor="jobType" className="label font-semibold">
                Job Type
              </label>
              <select
                id="jobType"
                className="select select-bordered focus:select-primary"
                onChange={(e) =>
                  setFormData({ ...formData, jobType: e.target.value })
                }
                value={formData.jobType}
              >
                <option>Full-Time</option>
                <option>Hybrid</option>
                <option>Remote</option>
                <option>Part-Time</option>
                <option>Intern</option>
                <option>Contractual</option>
              </select>
            </div>

            <div className="form-control w-full">
              <label htmlFor="category" className="label font-semibold">
                Category
              </label>
              <input
                id="category"
                type="text"
                placeholder="Enter Job Category"
                className="input input-bordered focus:input-primary"
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                value={formData.category}
              />
            </div>

            <div className="form-control w-full">
              <label htmlFor="deadline" className="label font-semibold">
                Application Deadline
              </label>
              <input
                id="deadline"
                type="date"
                className="input input-bordered focus:input-primary"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    applicationDeadline: e.target.value,
                  })
                }
                value={formData.applicationDeadline}
              />
            </div>
          </div>
        )}

        {/* STEP 2: JOB DETAILS */}
        {/* STEP 2: JOB DETAILS */}
        {step === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 animate-fadeIn">
            <h2 className="col-span-2 text-2xl font-bold mb-4 border-b pb-2 text-secondary">
              Requirements & Pay
            </h2>

            {/* Description - Full Width */}
            <div className="form-control col-span-2">
              <label htmlFor="description" className="label">
                <span className="label-text font-semibold">
                  Job Description
                </span>
              </label>
              <textarea
                id="description"
                className="textarea textarea-bordered h-32 focus:textarea-secondary text-base"
                placeholder="Detailed explanation of the role..."
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                value={formData.description}
              ></textarea>
            </div>

            {/* Salary Section - Split Row */}
            <div className="form-control w-full">
              <label htmlFor="minSalary" className="label">
                <span className="label-text font-semibold">
                  Min Salary (BDT)
                </span>
              </label>
              <input
                id="minSalary"
                type="number"
                placeholder="e.g. 40000"
                className="input input-bordered focus:input-secondary"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    salaryRange: {
                      ...formData.salaryRange,
                      min: e.target.value,
                    },
                  })
                }
                value={formData.salaryRange.min}
              />
            </div>

            <div className="form-control w-full">
              <label htmlFor="maxSalary" className="label">
                <span className="label-text font-semibold">
                  Max Salary (BDT)
                </span>
              </label>
              <input
                id="maxSalary"
                type="number"
                placeholder="e.g. 80000"
                className="input input-bordered focus:input-secondary"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    salaryRange: {
                      ...formData.salaryRange,
                      max: e.target.value,
                    },
                  })
                }
                value={formData.salaryRange.max}
              />
            </div>

            {/* Requirements - Full Width */}
            <div className="form-control col-span-2 mt-2">
              <label htmlFor="requirements" className="label">
                <span className="label-text font-semibold">Requirements</span>
              </label>
              <input
                id="requirements"
                type="text"
                placeholder="React, Node.js, MongoDB (comma separated)"
                className="input input-bordered focus:input-secondary"
                onChange={(e) =>
                  setFormData({ ...formData, requirements: e.target.value })
                }
                value={formData.requirements}
              />
              <label className="label">
                <span className="label-text-alt text-gray-500 italic">
                  Separate skills with a comma
                </span>
              </label>
            </div>

            {/* Responsibilities - Full Width */}
            <div className="form-control col-span-2">
              <label htmlFor="responsibilities" className="label">
                <span className="label-text font-semibold">
                  Key Responsibilities
                </span>
              </label>
              <input
                id="responsibilities"
                type="text"
                placeholder="Develop UI, API Integration, Testing"
                className="input input-bordered focus:input-secondary"
                onChange={(e) =>
                  setFormData({ ...formData, responsibilities: e.target.value })
                }
                value={formData.responsibilities}
              />
            </div>
          </div>
        )}

        {/* STEP 3: HR & COMPANY */}
        {step === 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
            <h2 className="col-span-2 text-2xl font-bold mb-2 border-b pb-2">
              Company & HR Details
            </h2>

            <div className="form-control">
              <label htmlFor="companyName" className="label font-semibold">
                Company Name
              </label>
              <input
                id="companyName"
                type="text"
                placeholder="Enter Company Name"
                className="input input-bordered focus:input-accent"
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                value={formData.company}
              />
            </div>

            <div className="form-control">
              <label htmlFor="hrName" className="label font-semibold">
                HR Name
              </label>
              <input
                id="hrName"
                type="text"
                placeholder="Enter HR Manager Name"
                className="input input-bordered focus:input-accent"
                onChange={(e) =>
                  setFormData({ ...formData, hr_name: e.target.value })
                }
                value={formData.hr_name}
              />
            </div>

            <div className="form-control col-span-2">
              <label htmlFor="hrEmail" className="label font-semibold">
                HR Email
              </label>
              <input
                id="hrEmail"
                type="email"
                placeholder="Enter HR Contact Email"
                className="input input-bordered focus:input-accent"
                onChange={(e) =>
                  setFormData({ ...formData, hr_email: e.target.value })
                }
                value={formData.hr_email}
              />
            </div>

            <div className="form-control col-span-2">
              <label htmlFor="logoUrl" className="label font-semibold">
                Company Logo URL
              </label>
              <input
                id="logoUrl"
                type="text"
                placeholder="Enter Company Logo Image URL"
                className="input input-bordered focus:input-accent"
                onChange={(e) =>
                  setFormData({ ...formData, company_logo: e.target.value })
                }
                value={formData.company_logo}
              />
            </div>
          </div>
        )}

        {/* NAVIGATION BUTTONS */}
        <div className="flex justify-between mt-12 pt-6 border-t">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="btn btn-outline px-8"
            >
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="btn btn-primary ml-auto px-8"
            >
              Next Step
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-success ml-auto text-white px-10"
            >
              Post Job
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepJobForm;
