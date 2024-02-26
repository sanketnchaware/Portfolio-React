import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "../Components/About";
import Education from "../Components/Education";
import Experiance from "../Components/Experiance";
import Home from "../Components/Home";
import Skills from "../Components/Skills";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Projects from "../Components/Projects";

const Layout = () => {
  const { pathname } = useLocation();
  console.log("pathname:", pathname);
  // const ShowComponent = () => {
  //   const element = document.getElementById("theelementsid");

  //   if (element) {
  //     window.scroll({
  //       top: element.scrollTop,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  useEffect(() => {}, [pathname]);
  return (
    <div className="">
      <Navbar />

      <div className="">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Projects />} path="/projects" />
          <Route element={<Experiance />} path="/work-experiance" />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
