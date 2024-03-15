"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
const Herosection = () => {
  return (
    <>
     <div className="w-full flex items-center justify-center overflow-hidden bg-slate-950 h-full pt-24 ">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-white text-center  text-4xl font-bold">
          Unleashing Innovation Through Code,
Crafting Solutions, Breaking the Mold.
Together, We Hack, Together We Thrive:Team Elites
          </p>
        }
        className="h-[40rem] border rounded-md"
      >
        Unleashing Innovation  <span className="text-primary-hackathon-color-500">Through Code,</span> Crafting Solutions, Breaking the Mold.
        Together, We Hack, Together We Thrive<span className="text-primary-hackathon-color-500 hover:text-5xl">:Team Elites</span>.
      </MaskContainer>
    </div>
    </>
  )
}

export default Herosection