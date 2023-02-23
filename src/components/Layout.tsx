import React, { FC, ReactNode } from "react";
import Header from "@components/Header";
import { Outlet } from "react-router-dom";
import Footer from "@components/Footer";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
