import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Nav from "../components/Nav.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-gradient-to-t from-breezy to-80% to-white dark:to-gray-900 fixed inset-0 -z-10"></div>
    <Nav />
    <div className="w-max container mx-auto p-4 justify-center mt-16">
      <App />
    </div>
  </StrictMode>
);
