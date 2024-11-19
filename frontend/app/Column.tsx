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
  const [{ isOver, item }, drop] = useDrop(() => ({
    accept: "JOB",
    drop: (item: { id: string; title: string; status: string }) => {
      setJobs((prevJobs) =>
        prevJobs.map((job) =>
          job.id === item.id ? { ...job, status: column.status } : job
        )
      );
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      item: monitor.getItem(),
    }),
  }));

  return (
    <div ref={drop} className="flex flex-col w-64 bg-gray-200 dark:bg-gray-900 rounded shadow">
      <div className="flex-none w-full bg-slate-400 flex justify-between items-center p-4 rounded-t shadow">
        <h2 className="font-bold font-sans text-2xl">{column.status}</h2>
        <ProgressIcon status={column.status} />
      </div>
      <div className="flex flex-col gap-2 p-4">
        {column.jobs.map((job) => (
          <Job key={job.id} job={job} handleOpenEditor={handleOpenEditor} />
        ))}
        {isOver && item && item.status !== column.status && (
          <Job
            job={{ ...item, status: column.status }}
            handleOpenEditor={() => undefined}
            isPlaceholder
          />
        )}
      </div>
    </div>
  );
};

export default Column;
