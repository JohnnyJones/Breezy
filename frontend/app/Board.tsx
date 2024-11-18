import React, { useState, useEffect } from "react";
import Column from "./Column";
import { Job, JobStatus } from "./types";

type Props = {
  jobs: Job[];
  setJobs: React.Dispatch<React.SetStateAction<JobType[]>>;
  handleOpenEditor: (job?: Job) => void;
};

const Board: React.FC<Props> = ({ jobs, setJobs, handleOpenEditor }) => {
  const [columns, setColumns] = useState<Column[]>([
    { id: "notstarted", status: JobStatus.NotStarted, jobs: [] },
    { id: "inprogress", status: JobStatus.InProgress, jobs: [] },
    { id: "completed", status: JobStatus.Completed, jobs: [] },
  ]);

  useEffect(() => {
    const updatedColumns = columns.map((column) => ({
      ...column,
      jobs: jobs.filter((job) => job.status === column.status),
    }));
    setColumns(updatedColumns);
  }, [jobs]);

  return (
    <div className="flex gap-4 p-4">
      {columns.map((column) => (
        <Column
          key={column.id}
          column={column}
          setJobs={setJobs}
          handleOpenEditor={handleOpenEditor}
        />
      ))}
    </div>
  );
};

export default Board;
