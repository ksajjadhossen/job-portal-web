import { use } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const JobApply = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  console.log(user);
  const job = useLoaderData(); // Assuming you pass job title/company via loader
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Application Data:", data);
    // Add your submission logic here
  };

  return (
    <div className="min-h-screen bg-[#0b0f1a] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">
            Apply for {job?.title || "Position"}
          </h1>
          <p className="text-gray-400">
            at{" "}
            <span className="text-blue-500 font-semibold">
              {job?.company || "the Company"}
            </span>
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[#111827] border border-gray-800 shadow-2xl rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            {/* Social Links Section */}
            <div className="pt-4">
              <h3 className="text-gray-100 font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>{" "}
                Professional Links
              </h3>
              <div className="space-y-4">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                    LinkedIn
                  </span>
                  <input
                    type="url"
                    name="linkedin"
                    placeholder="https://linkedin.com/in/username"
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-24 pr-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                    GitHub
                  </span>
                  <input
                    type="url"
                    name="github"
                    placeholder="https://github.com/username"
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-24 pr-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                    Portfolio
                  </span>
                  <input
                    type="url"
                    name="portfolio"
                    placeholder="https://yourwebsite.com"
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-24 pr-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Resume / Cover Letter */}
            <div className="pt-4">
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Why should we hire you? (Cover Letter)
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Briefly describe your experience and interest..."
                className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all resize-none"
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="flex-1 bg-transparent border border-gray-700 text-gray-300 py-3 rounded-xl font-bold hover:bg-gray-800 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all active:scale-95"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
