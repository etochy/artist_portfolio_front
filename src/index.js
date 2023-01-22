import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Projects from './components/projects/Projects';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/projects/:idProject",
    element: <Projects/>,
}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
