import React from "react";
import { useDrop } from "react-dnd";
import { Column as ColumnType, Job as JobType } from "./types";
import Job from "./Job";

type Props = {
  column: ColumnType;
  setJobs: React.Dispatch<React.SetStateAction<JobType[]>>;
};

const Column: React.FC<Props> = ({ column, setJobs }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "JOB",
    drop: (item: { id: string }) => {
      setJobs((prevJobs) =>
        prevJobs.map((job) =>
          job.id === item.id ? { ...job, status: column.status } : job
        )
      );
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));
  
  return (
    <div ref={drop} className="flex flex-col w-64 bg-gray-200 p-4 rounded shadow">
      <h2 className="font-bold text-lg mb-4">{column.status}</h2>
      <div className="flex flex-col gap-2">
        {column.jobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Column;
