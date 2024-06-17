
import { Poppins } from "next/font/google";

const ArvoFont = Poppins({ subsets: [], weight: '500' });

export default function Home_Greetings() {
    return (
        <main className="grid place-items-center h-auto p-2">
            <div className="flex flex-col p-4 items-center ">
                <h1 className={`${ArvoFont.className} text-center md:text-bigGreeting text-bigGreetingMobile text-black`}>
                    Hello There! Welcome to my Blog, <span className="text-red-700">KaProbinsyano</span>
                </h1>
                <p className={` text-sm md:text-smallGreetingFont text-neutral-800 mt-2`}>By Probinsyano Vlog</p>
            </div>
        </main>
    );
}
