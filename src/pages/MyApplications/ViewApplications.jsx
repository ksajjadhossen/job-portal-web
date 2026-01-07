    import axios from "axios";
    import React from "react";
    import { useLoaderData, useParams } from "react-router";
    import Swal from "sweetalert2"; // Optional: for nice alerts

    const ViewApplications = () => {
    const applications = useLoaderData();
    const { job_id } = useParams();

    // Event Handler to update status
    const handleStatusUpdate = (e, id) => {
        const newStatus = e.target.value;

        axios
        .patch(`http://localhost:3000/applications/${id}`, {
            status: newStatus,
        })
        .then((res) => {
            if (res.data.modifiedCount) {
            Swal.fire({
                title: "Your status updated",
                icon: "success",
                draggable: true,
            });
            }
        })
        .catch((err) => console.log(err));
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">
            Applications for Job ID: <span className="text-blue-400">{job_id}</span>
        </h2>

        <div className="bg-[#111827] border border-gray-800 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-300">
                <thead className="bg-gray-900/50 border-b border-gray-800 text-gray-400 uppercase text-xs">
                <tr>
                    <th className="px-6 py-4">#</th>
                    <th className="px-6 py-4">Applicant Email</th>
                    <th className="px-6 py-4">Resume/Message</th>
                    <th className="px-6 py-4">Update Status</th>
                    <th className="px-6 py-4 text-right">Links</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                {applications.length > 0 ? (
                    applications.map((app, index) => (
                    <tr
                        key={app._id}
                        className="hover:bg-gray-800/30 transition-colors"
                    >
                        <td className="px-6 py-4">{index + 1}</td>
                        <td className="px-6 py-4 font-medium text-white">
                        {app.applicant}
                        </td>
                        <td className="px-6 py-4 max-w-xs truncate">
                        {app.message || "No message provided"}
                        </td>

                        {/* Status Update Dropdown */}
                        <td className="px-6 py-4">
                        <select
                            defaultValue={app.status || "Pending"}
                            onChange={(e) => handleStatusUpdate(e, app._id)}
                            className="bg-gray-900 border border-gray-700 text-white text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"
                        >
                            <option value="Pending">Pending</option>
                            <option value="Hired">Hired</option>
                            <option value="Rejected">Rejected</option>
                            <option value="Interview Call">Interview Call</option>
                        </select>
                        </td>

                        <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-3 text-xs">
                            <a
                            href={app.resume}
                            target="_blank"
                            className="text-blue-400 hover:underline"
                            >
                            Resume
                            </a>
                            <a
                            href={app.github}
                            target="_blank"
                            className="text-gray-400 hover:text-white hover:underline"
                            >
                            GitHub
                            </a>
                        </div>
                        </td>
                    </tr>
                    ))
                ) : (
                    <tr>
                    <td
                        colSpan="5"
                        className="px-6 py-10 text-center text-gray-500"
                    >
                        No one has applied for this job yet.
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

    export default ViewApplications;
