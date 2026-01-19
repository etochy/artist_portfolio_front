import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Projects from './components/projects/Projects';
import Admin from './components/admin/Admin';
import ListProjects from './components/listProjects/ListProjects';
import About from './components/about/About';
import IllustrationsTest2 from './components/illustrationsTest2/IllustrationsTest2';
import Header from './components/header/Header';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import "./index.css";
import Footer from './components/footer/Footer';

const projectName = "";

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
        path: "/about/",
        element: <About />,
      },
      {
        path: "/shop/",
        element: <IllustrationsTest2 />,
      },
      {
        path: "/contact/",
        element: <IllustrationsTest2 />,
      },
      {
        path: "/portfolio/",
        element: <IllustrationsTest2 />,
      },
      {
        path: "/projects/",
        element: <ListProjects />,
      },
      {
        path: "/projects/:projectId",
        element: <Projects />,
      },
      {
        path: "/admin",
        element: <Admin />,
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
    <div className='root'>
    <Header />
    <div className='content'>
      <Outlet />
      <Footer />
    </div>
    </div>
  )
};
