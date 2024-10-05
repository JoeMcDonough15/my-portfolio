import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import NavModal from "./components/NavModal";
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import MusicPage from "./components/MusicPage";
import ProjectsPage from "./components/ProjectsPage";

import { useState } from "react";

const App = () => {
  const [navModalOpen, setNavModalOpen] = useState(false);

  const router = createBrowserRouter([
    {
      element: (
        <div className="wrapper">
          <Header
            className="main-container"
            navModalOpen={navModalOpen}
            setNavModalOpen={setNavModalOpen}
          />
          <NavModal
            navModalOpen={navModalOpen}
            setNavModalOpen={setNavModalOpen}
          />
          <main className="main-container">
            <Outlet />
          </main>
        </div>
      ),
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/music", element: <MusicPage /> },
        { path: "/projects", element: <ProjectsPage /> },
        { path: "/*", element: <h1>Page Not Found</h1> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
