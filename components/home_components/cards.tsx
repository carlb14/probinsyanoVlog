"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Goal from "./goal";
import AboutMe from "./about_me";
import VideoList from "./videos";

interface ButtonProps {
  componentName: string;
  isActive: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ componentName, isActive, onClick }) => (
  <button
    className={`p-1 rounded-md text-black md:text-sm text-xx outline-none ${isActive? "bg-red-700 text-white" : ""
      }`}
    onClick={onClick}
  >
    {componentName}
  </button>
);

interface HeaderProps {
  activeComponent: string;
}

const Header: React.FC<HeaderProps> = ({ activeComponent }) => (
  <div className="flex items-center w-full mt-3">
    <h1
      className={`md:text-sm text-xs text-white bg-red-700 lg:w-1/6 md:w-2/6 w-2/6 text-center p-1 rounded-xl `}
    >
      {activeComponent}
    </h1>
    <div className="w-full border-red-700 border-b"></div>
  </div>
);

interface ComponentContentProps {
  activeComponent: string;
  loading: boolean;
}

const ComponentContent: React.FC<ComponentContentProps> = ({ activeComponent, loading }) => {
  const componentHeights: { [key: string]: number } = {
    "About Me": 200,
    "Goal": 150,
    "Videos": 400,
  };

  const componentHeight: number = componentHeights[activeComponent as keyof typeof componentHeights];

  if (loading) {
    return (
      <div style={{ height: componentHeight }} className="flex justify-center items-center">
        <LoadingIndicator height={componentHeight} />
      </div>
    );
  }

  switch (activeComponent) {
    case "About Me":
      return <AboutMe />;
    case "Goal":
      return <Goal />;
    case "Videos":
      return <VideoList />;
    default:
      return null;
  }
};

interface LoadingIndicatorProps {
  height: number;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ height }) => (
  <div style={{ height }} className="flex justify-center items-center h-full">
    <div className="animate-spin rounded-full h-5 w-5 border-b-4 border-red-700"></div>
  </div>
);

export default function Cards() {
  const [activeComponent, setActiveComponent] = useState<"Videos" | "Goal" | "About Me">("Videos");
  const [loading, setLoading] = useState(false);

  const handleButtonClick = (componentName: "Videos" | "Goal" | "About Me") => {
    setLoading(true);
    setTimeout(() => {
      setActiveComponent(componentName);
      setLoading(false);
    }, 600);
  };

  return (
    <main className="grid place-items-center w-full h-auto p-2">
      <div className="flex justify-center p-2 mt-1 md:w-5/6 w-full gap-5 md:gap-10">
        <Button
          componentName="About Me"
          isActive={activeComponent === "About Me"}
          onClick={() => handleButtonClick("About Me")}
        />
        <Button
          componentName="Goal"
          isActive={activeComponent === "Goal"}
          onClick={() => handleButtonClick("Goal")}
        />
        <Button
          componentName="My Videos"
          isActive={activeComponent === "Videos"}
          onClick={() => handleButtonClick("Videos")}
        />
      </div>
      <section className="md:w-5/6 w-full">
        <Header activeComponent={activeComponent} />
        <AnimatePresence initial={false} mode="wait">
          <motion.section
            key={activeComponent} // Ensure unique key for different components
            className="h-auto mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-full flex justify-center border-b-1 border-shadow-600">
              <ComponentContent activeComponent={activeComponent} loading={loading} />
            </div>
          </motion.section>
        </AnimatePresence>
      </section>



    </main>
  );
}