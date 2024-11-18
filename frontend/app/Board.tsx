import React, { useState, useEffect } from "react";
import Column from "./Column";
import { Job, JobStatus } from "./types";

const Board: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([
    { id: "1", title: "My first job", status: JobStatus.InProgress },
    { id: "2", title: "My second job", status: JobStatus.NotStarted },
    { id: "3", title: "My third job", status: JobStatus.Completed },
    { id: "4", title: "My fourth job", status: JobStatus.InProgress },
    { id: "5", title: "My fifth job", status: JobStatus.NotStarted },
    { id: "6", title: "My sixth job", status: JobStatus.Completed },
    { id: "7", title: "My seventh job", status: JobStatus.NotStarted },
  ]);

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
        <Column key={column.id} column={column} setJobs={setJobs} />
      ))}
    </div>
  );
};

export default Board;
