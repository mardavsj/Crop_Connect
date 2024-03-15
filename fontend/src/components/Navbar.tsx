"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";

const page = () => {
  const images = [
    "https://images.unsplash.com/photo-1511735643442-503bb3bd348a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JvcHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1483871788521-4f224a86e166?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3JvcHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1621452353638-888c49e1d340?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3JvcHxlbnwwfHwwfHx8MA%3D%3D",
  ];
  return (
   <> <ImagesSlider className="h-[40rem]" images={images}>
   <motion.div
     initial={{
       opacity: 0,
       y: -80,
     }}
     animate={{
       opacity: 1,
       y: 0,
     }}
     transition={{
       duration: 0.6,
     }}
     className="z-50 flex flex-col justify-center items-center"
   >
     <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
       Satellite Image <br /> Analytics for Crop Health Monitoring
     </motion.p>
     <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
       <span>Test the Model→</span>
       <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary-hackathon-color-400  to-transparent" />
     </button>
   </motion.div>
 </ImagesSlider></>
  )
}

export default page