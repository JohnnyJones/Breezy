import React from "react";
import { useDrop } from "react-dnd";
import { Column as ColumnType, Job as JobType } from "./types";
import Job from "./Job";
import ProgressIcon from "./ProgressIcon";

type Props = {
  column: ColumnType;
  setJobs: React.Dispatch<React.SetStateAction<JobType[]>>;
  handleOpenEditor: (job?: JobType) => void;
};

const Column: React.FC<Props> = ({ column, setJobs, handleOpenEditor }) => {
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
    <div
      ref={drop}
      className="flex flex-col w-64 bg-gray-200 p-4 rounded shadow"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold font-sans text-2xl">{column.status}</h2>
        <ProgressIcon status={column.status} />
      </div>
      <div className="flex flex-col gap-2">
        {column.jobs.map((job) => (
          <Job key={job.id} job={job} handleOpenEditor={handleOpenEditor} />
        ))}
      </div>
    </div>
  );
};

export default Column;
