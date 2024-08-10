import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import One from './components/One';
import Two from './components/Two';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container!);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "one/",
        element: <One />
      },
      {
        path: "two/",
        element: <Two />
      }
    ]
  },
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);