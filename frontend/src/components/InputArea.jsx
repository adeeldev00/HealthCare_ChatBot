// components/InputArea.js
import React from "react";
const InputArea = ({ input, setInput, isLoading, handleSend }) => {
  return (
    <div className="border-t bg-white px-4 py-3 flex items-center">
      <input
        className="flex-grow px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-teal-400"
        type="text"
        placeholder="Type your response..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        disabled={isLoading}
      />
      <button
        className="ml-3 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50"
        onClick={handleSend}
        disabled={isLoading}
      >
        Send
      </button>
    </div>
  );
};

export default InputArea;
