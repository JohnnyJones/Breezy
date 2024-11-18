import React, { useState } from "react";
import { JobStatus, Job as JobType } from './types';
import '../static/index.css';
import ProgressIcon from "./ProgressIcon";

type Props = {
    job: JobType;
};

const Job: React.FC<Props> = ({ job }) => {
    return (
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <ProgressIcon status={job.status}/>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{job.title}</h5>
        <p className="text-gray-100">{job.customer}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">{job.description}</p>
        
      </div>
    );
};

export default Job;