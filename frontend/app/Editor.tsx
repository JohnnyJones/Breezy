import React from "react";
import { useState } from "react";
import { Job, JobStatus } from "./types";
import { v4 as uuidv4 } from "uuid";

type Props = {
  job?: Job;
  mode: "add" | "edit";
  onSave: (updatedJob: Job) => void;
  onClose: () => void;
};

const Editor: React.FC<Props> = ({ job, mode, onSave, onClose }) => {
  const [title, setTitle] = useState(job?.title || "");
  const [description, setDescription] = useState(job?.description || "");
  const [customer, setCustomer] = useState(job?.customer || "");
  const [status, setStatus] = useState(job?.status || JobStatus.NotStarted);

  const handleSave = () => {
    const updatedJob: Job = job
      ? { ...job, title, customer, description, status } // Update existing job
      : { id: uuidv4(), title, description, status }; // Create new job

    onSave(updatedJob);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">
          {mode === "add" ? "Add New Job" : "Edit Job"}
        </h2>
        <label className="block mb-2">
          <span className="text-sm font-semibold">Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
        </label>
        <label className="block mb-2">
          <span className="text-sm font-semibold">Customer</span>
          <input
            type="text"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
        </label>
        <label className="block mb-2">
          <span className="text-sm font-semibold">Description</span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
        </label>
        <label className="block mb-4">
          <span className="text-sm font-semibold">Status</span>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          >
            <option value={JobStatus.NotStarted}>Not Yet Started</option>
            <option value={JobStatus.InProgress}>In Progress</option>
            <option value={JobStatus.Completed}>Completed</option>
          </select>
        </label>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="py-2 px-4 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editor;
