import React, { useState } from "react";
import FolderView from "./FolderView";
import cara from "../img/cara2.png";
import cves from "../img/CVES.png";
import cven from "../img/CVEN.png";
import cvenFile from "../files/SebastianVisbalENCV.pdf";
import cvesFile from "../files/SebastianVisbalESCV.pdf";
import sena from "../img/SENA.png";
import uts from "../img/uts.png"
import campuslands from "../img/campuslands.png"

import github from "../img/github.png"
import linkedin from "../img/linkedin.png"

import ligabetplay from "../img/ligabetplay.png"
import f1simulator from "../img/f1simulation.png"

import frontEnd from "../img/frontEnd.png"
import backEnd from "../img/backEnd.png"
import automation from "../img/automation.png"
import database from "../img/database.png"

const folders = [
  { name: "About_Me", icon: "🧑‍💻" },
  { name: "Academic", icon: "📚" },
  { name: "Projects", icon: "🎯" },
  { name: "Skills", icon: "💻" },
];

const folderFiles = {
  About_Me: [
    {
      name: "AboutMe.pdf",
      type: "pdf",
      icon: cara,
      description:
        "I like learning and creating new things. Junior back-end developer, I enjoy coding and meeting new people!",
    },
    {
      name: "CVES.pdf",
      type: "pdf",
      icon: cves,
      description: "CV in Spanish",
      fileUrl: cvesFile,
    },
    {
      name: "CVEN.pdf",
      type: "pdf",
      icon: cven,
      description: "CV in English",
      fileUrl: cvenFile,
    },
    {
      name: "GitHub.href",
      type: "link",
      icon: github,
      description: "Visit my GitHub",
      url: "https://github.com/sebastianVis",
    },
    {
      name: "LinkedIn.href",
      type: "link",
      icon: linkedin,
      description: "Visit my LinkedIn",
      url: "https://www.linkedin.com/in/sebasti%C3%A1n-alberto-visbal-s%C3%A1enz-395913286/",
    }
  ],
  Academic: [
    {
      name: "SENA.pdf",
      type: "pdf",
      icon: sena,
      description: "Mechatronic Automation Tecnologist 2022 - 2024",
    },
    {
      name: "UTS.pdf",
      type: "pdf",
      icon: uts,
      description: "Electronic Engineering 2024 - CURRENTLY",
    },
    {
      name: "Campuslands.pdf",
      type: "pdf",
      icon: campuslands,
      description: "Software Developing 2024 - CURRENTLY",
    }
  ],
  Projects:[
    {
      name: "LigaBetPlay.py",
      type: "link",
      icon: ligabetplay,
      description: "Project developed with Python and JSON, creating the structure of a league where the organizer can create entire teams, an saving all the information that they must need at a tournament",
      url: "https://github.com/sebastianVis/TallerPythonLigaDic",
    },
    {
      name: "f1Simulator.js",
      type: "link",
      icon: f1simulator,
      description: "Project developed with JavaScript Vanila, where the user can develop, Teams, pilots, circuis and cars. Then, the player can select them and play them in the circuits.",
      url: "https://github.com/sebastianVis/f1Simulator"
    }
  ],
  Skills: [
    {
      name: "Front-end.js",
      type: "skill",
      icon: frontEnd,
      description: "I have habilities working with JavaScript, HTML, CSS (also TailwindCSS) and React",
    },
    {
      name: "Back-end.py",
      type: "skill",
      icon: backEnd,
      description: "I have habilities working with Python, Java and C#",
    },
    {
      name: "DataBase",
      type: "skill",
      icon: database,
      description: "I have habilities working with MySQL and PostgreSQL",
    },
    {
      name: "Automation",
      type: "skill",
      icon: automation,
      description: "I have habilities working with Arduino, Python, PLC Siemens languages as LADDER, GRAFCET and FLOWCHART",
    }
  ]

};

const FileExplorer = () => {
  const [activeFolder, setActiveFolder] = useState("About_Me");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileClick = (file) => {
    setSelectedFile(file);
  };

  return (
    <div className="relative top-[10vh] flex flex-col md:flex-row h-[90vh] w-full overflow-hidden">
      {/* Sidebar */}
      <aside className="w-full md:w-64 flex-shrink-0 bg-gray-100 dark:bg-[#332436] border-b md:border-b-0 md:border-r dark:border-[#32CD32] p-4 overflow-y-auto">
        <ul className="space-y-2">
          {folders.map((folder) => (
            <li
              key={folder.name}
              onClick={() => setActiveFolder(folder.name)}
              className={`cursor-pointer px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-[#295229] ${
                activeFolder === folder.name
                  ? "bg-[#32CD32] text-white"
                  : "text-gray-500 dark:text-gray-400 font-[Press Start 2P] text-xs"
              }`}
            >
              <span className="mr-2">{folder.icon}</span>
              {folder.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Folder View */}
      <main className="flex-1 overflow-y-auto p-4 bg-white dark:bg-[#332436]">
        <FolderView
          folderName={activeFolder}
          files={folderFiles[activeFolder]}
          onFileClick={handleFileClick}
        />
      </main>

      {/* Preview Panel */}
      <aside className="w-full md:w-80 flex-shrink-0 border-t md:border-t-0 md:border-l border-[#32CD32] dark:border-[#32CD32] p-4 dark:bg-[#332436] overflow-y-auto">
        <h3 className="text-lg font-bold mb-4">Preview</h3>
        {selectedFile ? (
          <div className="flex flex-col items-center space-y-4">
            <img
              src={selectedFile.icon}
              alt={selectedFile.name}
              className="w-40 h-52 object-contain rounded border"
            />
            <p className="text-center text-sm break-words font-mono">
              {selectedFile.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              {selectedFile.description}
            </p>
            {selectedFile.type === "pdf" && selectedFile.fileUrl && (
              <a
                href={selectedFile.fileUrl}
                download
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                Descargar {selectedFile.name}
              </a>
            )}
            {selectedFile.type === "link" && selectedFile.url && (
              <a
                href={selectedFile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Redirect to {selectedFile.name}
              </a>
            )}
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Selecciona un archivo para ver su contenido.
          </p>
        )}
      </aside>
    </div>
  );
};

export default FileExplorer;
