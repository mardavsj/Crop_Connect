"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export const users = [
  {
    name: "Team Elites",
    designation: "",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Team Elites",
  },
 
];

const TopNav = () => {
  return (
<>
<div className="flex flex-col overflow-hidden ">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white backgroundimage">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Machine Learning & Artificial Intelligence in Crop Health Analysis.
              </span>
            </h1>
          </>
        }
      />
    </div>
</>
  )
}

export default TopNav
