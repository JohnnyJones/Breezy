import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { JobStatus, Job as JobType } from "./types";
import "../static/index.css";
import ProgressIcon from "./ProgressIcon";

type Props = {
  job: JobType;
  handleOpenEditor: (job?: JobType) => void;
  isPlaceholder?: boolean;
};

const Job: React.FC<Props> = ({ job, handleOpenEditor, isPlaceholder }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "JOB",
    item: job,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`block max-w-sm p-6 hover:border-4 border-slate-600 rounded-lg shadow bg-slate-600 hover:bg-gray-700 ${
        isPlaceholder
          ? "border-2 border-dashed border-gray-400 bg-gray-100"
          : "bg-white border-4 bg-gray-800 hover:bg-gray-700"
      } ${isDragging ? "opacity-50" : ""} ${
        job.status === JobStatus.NotStarted
          ? "hover:border-gray-500"
          : job.status === JobStatus.InProgress
          ? "hover:border-yellow-500"
          : "hover:border-green-700"
      }`}
      onClick={() => !isPlaceholder && handleOpenEditor(job)}
    >
      {/* <ProgressIcon status={job.status} /> */}
      <h5 className="mb-2 text-xl font-sans font-semibold tracking-tight text-white">
        {job.title}
      </h5>
      <p className="font-medium text-lg text-gray-200">{job.customer}</p>
      <p className="font-normal text-sm text-gray-400">
        {job.description}
      </p>
    </div>
  );
};

export default Job;
