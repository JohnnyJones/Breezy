import React from "react";
import ReactDOM from "react-dom";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { useState } from "react";

import "../static/index.css";
import { JobStatus, Job } from "./types";
import Example from "../components/Example";
import AddJob from "./AddJob";
import Board from "./Board";
import Column from "./Column";
import Editor from "./Editor";

function App() {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState<Job | undefined>(undefined);
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [jobs, setJobs] = useState<Job[]>([
    { id: "1", title: "My first job", status: JobStatus.InProgress },
    { id: "2", title: "My second job", status: JobStatus.NotStarted },
    { id: "3", title: "My third job", status: JobStatus.Completed },
    { id: "4", title: "My fourth job", status: JobStatus.InProgress },
    { id: "5", title: "My fifth job", status: JobStatus.NotStarted },
    { id: "6", title: "My sixth job", status: JobStatus.Completed },
    { id: "7", title: "My seventh job", status: JobStatus.NotStarted },
  ]);

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
      <AddJob handleOpenEditor={handleOpenEditor} />
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
