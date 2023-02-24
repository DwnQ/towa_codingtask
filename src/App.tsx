import React, { FC, ReactNode } from "react";
import "./App.css";
import Layout from "@components/Layout";
import Home from "@pages/Home";
import Api from "@pages/Api";
import NotFound from "@pages/NotFound";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Grid from "@pages/Grid";

const App = () => {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="grid" element={<Grid />} />
          <Route path="api" element={<Api />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
