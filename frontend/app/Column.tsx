import React from "react";
import { Column as ColumnType, Job as JobType } from './types';
import Job from './Job';

type Props = {
    column: ColumnType;
    setColumns: React.Dispatch<React.SetStateAction<ColumnType[]>>;
};

const Column: React.FC<Props> = ({ column, setColumns }) => {
    return (
        <div className="flex flex-col w-64 bg-gray-200 p-4 rounded shadow">
          <h2 className="font-bold text-lg mb-4">{column.status}</h2>
            <div className="flex flex-col gap-2">
              {column.jobs.map((job) => (
                <Job key={job.id} job={job} />
              ))}
            </div>
        </div>
    )
}

export default Column;