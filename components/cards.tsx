"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import Goal from "./goal";
import About_Me from "./about_me";
import VideoList from "./videos";

export default function Cards() {
    const [activeComponent, setActiveComponent] = useState("Videos");
    const [loading, setLoading] = useState(false); // State to track loading state of components

    const handleButtonClick = (componentName: string) => {
        setLoading(true); // Set loading to true when switching components
        setTimeout(() => {
            setActiveComponent(componentName);
            setLoading(false); // Set loading to false once component is rendered
        }, 500); // Simulating a 500ms delay before rendering component (adjust as needed)
    };

    return (
        <main className="grid place-items-center w-full h-auto p-2">
            <div className="flex justify-center p-2 mt-1 md:w-5/6 w-full gap-5 md:gap-10">
                <button
                    className={`p-1 text-black text-sm outline-none ${activeComponent === "About_Me" ? "text-red-700 border-red-700 border-b" : ""
                        }`}
                    onClick={() => handleButtonClick("About_Me")}
                >
                    About Me
                </button>
                <button
                    className={`p-1 text-black text-sm outline-none ${activeComponent === "Goal" ? "text-red-700 border-red-700 border-b" : ""
                        }`}
                    onClick={() => handleButtonClick("Goal")}
                >
                    Goal
                </button>
                <button
                    className={`p-1 text-black text-sm outline-none ${activeComponent === "Videos" ? "text-red-700 border-red-700 border-b" : ""
                        }`}
                    onClick={() => handleButtonClick("Videos")}
                >
                    My Videos
                </button>
            </div>
            <section className="md:w-5/6 w-full">
                {/* Header */}
                <div className="flex items-center w-full mt-3">
                    <h1 className="text-sm text-white bg-red-700 lg:w-1/6 md:w-2/6 w-2/6 text-center p-1 rounded-tl-xl rounded-b-sm">
                        {activeComponent === "About_Me" && "About Me"}
                        {activeComponent === "Goal" && "Goal"}
                        {activeComponent === "Videos" && "My Videos"}
                    </h1>
                    <div className="w-full border-red-700 border-b"></div>
                </div>
                {/* Component Content */}
                <motion.div
                    className="h-auto  mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-full flex justify-center">
                        {loading ? (
                            <LoadingIndicator /> // Render loading indicator while component is loading
                        ) : (
                            <>
                                <motion.div
                                    className=""
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {activeComponent === "About_Me" && <About_Me />}

                                    {activeComponent === "Goal" && <Goal />}
                                </motion.div>
                                {activeComponent === "Videos" && <VideoList />}
                                {/* Add more conditions for other components if needed */}

                            </>
                        )}

                    </div>
                </motion.div>
            </section>
        </main>
    );
}

// Example loading indicator component
const LoadingIndicator = () => (
    <div className="flex justify-center items-center h-56">
        <div className="animate-spin rounded-full h-5 w-5 border-b-4 border-red-700"></div>
    </div>
);
