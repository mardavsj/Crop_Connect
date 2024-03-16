"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
const Herosection = () => {
  return (
    <>
     <div className="w-full flex items-center justify-center overflow-hidden bg-slate-950 h-full pt-24 ">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-white text-center  text-4xl font-bold">
         With Tech in Hand,Every Crop has a Plan.
         Sowing Tech For Happy Harvest's :Crop-Connect
          </p>
        }
        className="h-[40rem] border rounded-md"
      >
        With Tech in   <span className="text-primary-hackathon-color-500">Hand,Every Crop</span> Chas a Plan,
        Sowing Tech For Happy Harvest's<span className="text-primary-hackathon-color-500 hover:text-5xl">:Crop-Connect</span>.
      </MaskContainer>
    </div>
    </>
  )
}

export default Herosection