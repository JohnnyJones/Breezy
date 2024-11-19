import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Nav from "../components/Nav.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Nav />
    <div className="bg-gradient-to-t from-breezy to-white dark:to-gray-900">
      <div className="container mx-auto p-4">
        <App />
      </div>
    </div>
  </StrictMode>
);
