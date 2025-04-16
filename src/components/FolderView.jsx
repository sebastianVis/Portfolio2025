import React from "react";

const FolderView = ({ folderName, files = [], onFileClick }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">{folderName}</h2>

      {files.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">Empty_Folder.</p>
      ) : (
        <div className="flex flex-wrap gap-4 justify-start">
  {files.map((file, idx) => (
    <div
      key={idx}
      onClick={() => onFileClick(file)}
      className="w-44 h-56 cursor-pointer rounded p-4 flex flex-col items-center dark:hover:border hover:border hover:border-dashed hover:border-[#32CD32] transition"
    >
      <div className="text-4xl w-20 h-24 flex items-center justify-center">
        {typeof file.icon === "string" && file.icon.length <= 3 ? (
          <span className="text-5xl">{file.icon}</span>
        ) : (
          <img
            src={file.icon}
            alt={file.name}
            className="w-full h-full object-contain"
          />
        )}
      </div>
      <p className="text-sm mt-3 text-center break-words">{file.name}</p>
    </div>
  ))}
</div>

      )}
    </div>
  );
};

export default FolderView;
