import React, { FC, ReactNode } from "react";
import "./App.css";
import Layout from "@components/Layout";
import Home from "@pages/Home";
import About from "@pages/About";
import Dashboard from "@pages/Dashboard";
import NotFound from "@pages/NotFound";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
