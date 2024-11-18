export enum JobStatus {
  NotStarted = "Not Yet Started",
  InProgress = "In Progress",
  Completed = "Completed",
}

export type Job = {
  id: string;
  title: string;
  customer: string;
  description?: string;
  status: JobStatus;
};

export type Column = {
  id: string;
  status: JobStatus;
  jobs: Job[];
};
