import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Projects from './components/projects/Projects';
import ListProjects from './components/listProjects/ListProjects';
import Header from './components/header/Header';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import "./index.css";
import Footer from './components/footer/Footer';

const projectName = "/artist_portfolio_front";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/projects/",
        element: <ListProjects />,
      },
      {
        path: "/projects/:projectName",
        element: <Projects />,
      }
    ]
  }
], {
  basename: projectName,
});




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

function NavbarWrapper() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
};
