import { AnimatePresence } from "framer-motion";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AnimatePresence mode="wait">
      <ToastContainer />
      <RouterProvider router={router} />
    </AnimatePresence>
  </StrictMode>
);
