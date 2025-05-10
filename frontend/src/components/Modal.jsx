import React from "react";

const Modal = ({ summary, handleRestart, handleExit }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg max-w-xl w-full h-[80vh] shadow-md flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-teal-700">
            📝 Your Health Summary
          </h2>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 py-2 text-gray-700 whitespace-pre-line">
          {summary}
        </div>

        {/* Sticky Footer Buttons */}
        <div className="p-4 border-t border-gray-200 flex justify-end space-x-2 bg-white">
          <button
            onClick={handleRestart}
            className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
          >
            Restart
          </button>
          <button
            onClick={handleExit}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
