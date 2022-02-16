import React from "react";
import { Routes, Route } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes.js";
import About from "../pages/About.jsx";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import Projects from "../pages/Projects.jsx";
import Blogs from "../pages/Blogs.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";
import AdminDashboard from "../pages/AdminDashboard.jsx";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/*" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route
        path="/admin"
        element={
          <PrivateRoutes>
            <AdminDashboard />
          </PrivateRoutes>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default PageRoutes;
