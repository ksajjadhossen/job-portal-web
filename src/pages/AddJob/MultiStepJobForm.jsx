import React, { useState } from "react";

const MultiStepJobForm = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    jobType: "Full-Time",
    category: "",
    applicationDeadline: "",
    salaryRange: { min: "", max: "", currency: "bdt" },
    description: "",
    company: "",
    requirements: "",
    responsibilities: "",
    hr_email: "",
    hr_name: "",
    company_logo: "",
  });

  /* ---------------- STEP VALIDATION ---------------- */
  const nextStep = () => {
    if (step === 1) {
      const { title, location, category, applicationDeadline } = formData;
      if (!title || !location || !category || !applicationDeadline) {
        alert("Please fill all Job Basic fields");
        return;
      }
    }

    if (step === 2) {
      const { description, requirements, responsibilities, salaryRange } =
        formData;

      if (
        !description ||
        !requirements ||
        !responsibilities ||
        !salaryRange.min ||
        !salaryRange.max
      ) {
        alert("Please complete Job Details properly");
        return;
      }

      if (Number(salaryRange.min) > Number(salaryRange.max)) {
        alert("Min salary cannot be greater than Max salary");
        return;
      }
    }

    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  /* ---------------- FINAL SUBMIT ---------------- */
  const handleSubmit = (e) => {
    e.preventDefault();

    const { company, hr_name, hr_email } = formData;
    if (!company || !hr_name || !hr_email) {
      alert("Please fill Company & HR information");
      return;
    }

    const finalData = {
      ...formData,
      salaryRange: {
        ...formData.salaryRange,
        min: Number(formData.salaryRange.min),
        max: Number(formData.salaryRange.max),
      },
      requirements: formData.requirements
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      responsibilities: formData.responsibilities
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    };

    console.log("Final Job Data:", finalData);
    alert("Job Posted Successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-200 rounded-xl shadow-xl my-10">
      {/* Progress Header */}
      <div className="flex items-center justify-center mb-10">
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
        onKeyDown={(e) => {
          if (e.key === "Enter" && step !== 3) e.preventDefault();
        }}
        className="bg-base-100 p-10 rounded-lg shadow-sm"
      >
        {/* STEP 1 */}
        {step === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
            <h2 className="col-span-2 text-2xl font-bold border-b pb-2">
              Job Basics
            </h2>

            <input
              className="input input-bordered"
              placeholder="Job Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />

            <input
              className="input input-bordered"
              placeholder="Location"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />

            <select
              className="select select-bordered"
              value={formData.jobType}
              onChange={(e) =>
                setFormData({ ...formData, jobType: e.target.value })
              }
            >
              <option>Full-Time</option>
              <option>Hybrid</option>
              <option>Remote</option>
              <option>Part-Time</option>
              <option>Intern</option>
              <option>Contractual</option>
            </select>

            <input
              className="input input-bordered"
              placeholder="Category"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            />

            <input
              type="date"
              className="input input-bordered"
              value={formData.applicationDeadline}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  applicationDeadline: e.target.value,
                })
              }
            />
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
            <h2 className="col-span-2 text-2xl font-bold border-b pb-2 text-secondary">
              Job Details
            </h2>

            <textarea
              className="textarea textarea-bordered col-span-2 h-32"
              placeholder="Job Description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />

            <input
              type="number"
              className="input input-bordered"
              placeholder="Min Salary"
              value={formData.salaryRange.min}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  salaryRange: {
                    ...formData.salaryRange,
                    min: e.target.value,
                  },
                })
              }
            />

            <input
              type="number"
              className="input input-bordered"
              placeholder="Max Salary"
              value={formData.salaryRange.max}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  salaryRange: {
                    ...formData.salaryRange,
                    max: e.target.value,
                  },
                })
              }
            />

            <input
              className="input input-bordered col-span-2"
              placeholder="Requirements (comma separated)"
              value={formData.requirements}
              onChange={(e) =>
                setFormData({ ...formData, requirements: e.target.value })
              }
            />

            <input
              className="input input-bordered col-span-2"
              placeholder="Responsibilities (comma separated)"
              value={formData.responsibilities}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  responsibilities: e.target.value,
                })
              }
            />
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
            <h2 className="col-span-2 text-2xl font-bold border-b pb-2">
              Company & HR
            </h2>

            <input
              className="input input-bordered"
              placeholder="Company Name"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />

            <input
              className="input input-bordered"
              placeholder="HR Name"
              value={formData.hr_name}
              onChange={(e) =>
                setFormData({ ...formData, hr_name: e.target.value })
              }
            />

            <input
              type="email"
              className="input input-bordered col-span-2"
              placeholder="HR Email"
              value={formData.hr_email}
              onChange={(e) =>
                setFormData({ ...formData, hr_email: e.target.value })
              }
            />

            <input
              className="input input-bordered col-span-2"
              placeholder="Company Logo URL"
              value={formData.company_logo}
              onChange={(e) =>
                setFormData({ ...formData, company_logo: e.target.value })
              }
            />
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-between mt-12 border-t pt-6">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="btn btn-outline"
            >
              Back
            </button>
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="btn btn-primary ml-auto"
            >
              Next Step
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-success ml-auto text-white"
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
