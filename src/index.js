import React from "react";
import { DeSoIdentityProvider } from "react-deso-protocol";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Home } from "./routes/home";
import { Root } from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DeSoIdentityProvider>
      <RouterProvider router={router} />
    </DeSoIdentityProvider>
  </React.StrictMode>
);
