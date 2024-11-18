import React from "react";
import ReactDOM from "react-dom";
import Example from "../components/Example";
import Board from "./Board";
import Column from "./Column";
import Job from "./Job";
import { JobStatus } from "./types";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

function App() {
  return (
    <>
      <h1>MY APP</h1>
      <DndProvider backend={HTML5Backend}>
        <Job
          job={{ id: "1", title: "This is a Job", status: JobStatus.Completed }}
        />
        {/* <Column column={{id: '', status: 'THIS IS A COLUMN', jobs: [
                { id: '1', title: 'My first job', status: JobStatus.InProgress},
                { id: '2', title: 'My second job', status: JobStatus.NotStarted},
                { id: '3', title: 'My third job', status: JobStatus.Completed},
            ]}}/> */}
        {/* <Board /> */}
      </DndProvider>
      <Example />
    </>
  );
}

export default App;
