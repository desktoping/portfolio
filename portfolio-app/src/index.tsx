import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Container from "./components/main/container";
import { pdfjs } from "react-pdf";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Projects from "./components/project";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
  },
  { path: "/projects", element: <Projects /> },
]);

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
