import "./static/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Nav from "./components/Nav";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Nav />
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="text-center">
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          Jobs App Demo
        </h1>
        <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          This is a sample job-tracking application built with Bun, React,
          TypeScript, Vite, and Tailwind. The application is designed to help
          HVAC companies manage their jobs using a kanban board interface.
        </p>
        <div className="mt-16">
          <a
            href="/app/"
            className="text-medium text-white bg-blue-900 rounded-full p-4"
          >
            Try the app
          </a>
        </div>
      </div>
    </div>
  </StrictMode>
);
