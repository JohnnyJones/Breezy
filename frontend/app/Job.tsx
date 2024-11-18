import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { JobStatus, Job as JobType } from "./types";
import "../static/index.css";
import ProgressIcon from "./ProgressIcon";

type Props = {
  job: JobType;
  handleOpenEditor: (job?: JobType) => void;
};

const Job: React.FC<Props> = ({ job, handleOpenEditor }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "JOB",
    item: { id: job.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`block max-w-sm p-6 bg-white border-4 rounded-lg shadow bg-gray-800 hover:bg-gray-700 ${
        isDragging ? "opacity-50" : ""
      } ${
        job.status === JobStatus.NotStarted
        ? "hover:border-gray-500"
        : job.status === JobStatus.InProgress
        ? "hover:border-yellow-500"
        : "hover:border-green-700"
      }`}
      onClick={() => handleOpenEditor(job)}
    >
      {/* <ProgressIcon status={job.status} /> */}
      <h5 className="mb-2 text-xl font-sans font-semibold tracking-tight text-gray-900 dark:text-white">
        {job.title}
      </h5>
      <p className="font-medium text-lg text-gray-100">{job.customer}</p>
      <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
        {job.description}
      </p>
    </div>
  );
};

export default Job;
