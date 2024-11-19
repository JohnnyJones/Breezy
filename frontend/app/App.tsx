import React from "react";
import ReactDOM from "react-dom";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


import "../static/index.css";
import { JobStatus, Job } from "./types";
import Example from "../components/Example";
import AddJobButton from "./AddJobButton";
import Board from "./Board";
import Column from "./Column";
import Editor from "./Editor";

const placeHolderJobs: Job[] = [
  {
    id: uuidv4(),
    title: "Install HVAC System",
    customer: "John Doe",
    description: "Install a new HVAC system in the residential property.",
    status: JobStatus.InProgress,
  },
  {
    id: uuidv4(),
    title: "Repair Plumbing Leak",
    customer: "Jane Smith",
    description: "Fix the leaking pipe in the kitchen.",
    status: JobStatus.NotStarted,
  },
  {
    id: uuidv4(),
    title: "HVAC Maintenance",
    customer: "Acme Corp",
    description: "Perform routine maintenance on the HVAC system.",
    status: JobStatus.Completed,
  },
  {
    id: uuidv4(),
    title: "Replace Water Heater",
    customer: "Bob Johnson",
    description:
      "Replace the old water heater with a new energy-efficient model.",
    status: JobStatus.InProgress,
  },
  {
    id: uuidv4(),
    title: "Unclog Drain",
    customer: "Alice Brown",
    description: "Unclog the drain in the bathroom sink.",
    status: JobStatus.NotStarted,
  },
  {
    id: uuidv4(),
    title: "Install New Faucet",
    customer: "Charlie Davis",
    description: "Install a new faucet in the kitchen.",
    status: JobStatus.Completed,
  },
  {
    id: uuidv4(),
    title: "Inspect HVAC System",
    customer: "Eve Wilson",
    description: "Inspect the HVAC system for any potential issues.",
    status: JobStatus.NotStarted,
  },
];

function App() {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState<Job | undefined>(undefined);
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [jobs, setJobs] = useState<Job[]>(placeHolderJobs);

  const handleOpenEditor = (job?: Job) => {
    setCurrentJob(job);
    setMode(job ? "edit" : "add");
    setIsEditorOpen(true);
  };

  const handleCloseEditor = () => {
    setIsEditorOpen(false);
    setCurrentJob(undefined);
  };

  const handleSaveJob = (updatedJob: Job) => {
    setJobs((prevJobs) => {
      const jobIndex = prevJobs.findIndex((job) => job.id === updatedJob.id);
      if (jobIndex > -1) {
        // Update existing job
        const updatedJobs = [...prevJobs];
        updatedJobs[jobIndex] = updatedJob;
        return updatedJobs;
      } else {
        // Add new job
        return [...prevJobs, updatedJob];
      }
    });
    handleCloseEditor();
  };

  return (
    <>
      <AddJobButton handleOpenEditor={handleOpenEditor} />
      <DndProvider backend={HTML5Backend}>
        <Board
          jobs={jobs}
          setJobs={setJobs}
          handleOpenEditor={handleOpenEditor}
        />
      </DndProvider>
      {isEditorOpen && (
        <Editor
          job={currentJob}
          mode={mode}
          onSave={handleSaveJob}
          onClose={handleCloseEditor}
        />
      )}
    </>
  );
}

export default App;
