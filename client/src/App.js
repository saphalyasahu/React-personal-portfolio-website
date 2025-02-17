import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import TechStack from"./Components/TechStack/TechStack";
import Project from"./Components/Project/Project";

const app = ()=>{
  return(
    <>
      <Sidebar/>
      <About/>
      <TechStack/>
      <Project/>
    </>
  )
}
export default app;