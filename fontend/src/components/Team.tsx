"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
const Team = () => {
  return (
   <>
   <div className="text-6xl w-full font-extrabold from-primary-hackathon-color-200 via-primary-hackathon-color-600 to-primary-hackathon-color-800 bg-slate-950 text-center pt-20 text-white">About Us</div>
   <div className="bg-slate-950 md:flex-none">

      <div className="h-[40rem] w-full flex">
      <PinContainer
        title="https://twitter.com/nikhilhvr"
        href="https://twitter.com/"
        >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Abhishek 
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Team Leader
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-primary-hackathon-color-200 via-primary-hackathon-color-600 to-primary-hackathon-color-800" />
        </div>
      </PinContainer>
      <PinContainer
        title="https://twitter.com/nikhilhvr"
        href="https://twitter.com/nikhilhvr "
        >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Nikhil
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500  ">
             Team Member
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-primary-hackathon-color-200 via-primary-hackathon-color-600 to-primary-hackathon-color-800" />
        </div>
      </PinContainer>
      <PinContainer
        title="https://twitter.com/nikhilhvr"
        href="https://twitter.com/mannupaaji"
        >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Mardav
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500  sm:text-7xl md:text-xl  ">
            Team Member
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-primary-hackathon-color-200 via-primary-hackathon-color-600 to-primary-hackathon-color-800" />
        </div>
      </PinContainer>
      <PinContainer
        title="https://twitter.com/nikhilhvr"
        href="https://twitter.com/aditiya"
        >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
         Aditya
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Team Member
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-primary-hackathon-color-200 via-primary-hackathon-color-600 to-primary-hackathon-color-800" />
        </div>
      </PinContainer>
    </div>
          </div>
   </>
  )
}

export default Team