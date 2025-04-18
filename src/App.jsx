import React, { useState } from "react";
import FileExplorer from "./components/FileExplorer";
import "./index.css";

export function App() {

  return (
      <div className="flex bg-white dark:bg-[#332436] min-h-screen text-gray-800 dark:text-white transition-colors duration-300">
        <header className="bg-[#332436] w-full h-[10vh] fixed bg flex justify-between border-b border-[#32CD32] items-center p-5 z-1">
          <h1 className="p-1 text-xl font-bold">Sebastian_Visbal_Explorer</h1>

        </header>
        <FileExplorer />
      </div>
  );
}

export default App;
