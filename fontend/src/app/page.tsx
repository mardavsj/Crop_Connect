import Backend from "@/components/Backend";
import Herosection from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import TopNav from "@/components/TopNav";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Backend/>
      <TopNav/>
    <Navbar/>
     {/* <h1 className="text-5xl text-primary-hackathon-color-500 font-bold">Team Elites</h1> */}
    <Herosection/>
    <Team/> 
    </main>
    </>
  );
}
