import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Nav from "../components/Nav.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Nav />
    <div className="container mx-auto p-4">
      <App />
    </div>
  </StrictMode>
);
