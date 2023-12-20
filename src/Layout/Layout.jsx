import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Components/About";
import Education from "../Components/Education";
import Experiance from "../Components/Experiance";
import Home from "../Components/Home";
import Skills from "../Components/Skills";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
  // const ShowComponent = () => {
  //   const element = document.getElementById("theelementsid");

  //   if (element) {
  //     window.scroll({
  //       top: element.scrollTop,
  //       behavior: "smooth",
  //     });
  //   }
  // };
  return (
    <div className="">
      <Navbar />

      <div className="py-8">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Education />} path="/education" />
          <Route element={<Skills />} path="/skills" />
          <Route element={<Experiance />} path="/work-experiance" />
          <Route element={<About />} path="/about-me" />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
