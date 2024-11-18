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
      className={`block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${
        isDragging ? "opacity-50" : ""
      }`}
      onClick={() => handleOpenEditor(job)}
    >
      <ProgressIcon status={job.status} />
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {job.title}
      </h5>
      <p className="text-gray-100">{job.customer}</p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {job.description}
      </p>
    </div>
  );
};

export default Job;
