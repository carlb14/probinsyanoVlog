//import Image from "next/image";

import Cards from "@/components/cards";
import Collaboration from "@/components/collaboration";
import Home_Greetings from "@/components/home_greetings";





export default function Home() {
  return (
    <main>
      <Home_Greetings />
      <Cards />
      
      <div className="grid place-items-center ">
        <section className="flex justify-center w-full md:w-5/6 mt-4 p-2">
          <Collaboration />

        </section>
        
      </div>
    </main>
  );
}
