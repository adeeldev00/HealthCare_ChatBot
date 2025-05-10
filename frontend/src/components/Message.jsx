import React from "react";

const Message = ({ message, sender }) => {
  return (
    <div
      className={`w-fit max-w-[40%] px-4 py-3 rounded-2xl text-base break-words whitespace-pre-wrap ${
        sender === "user"
          ? "bg-teal-300 self-end text-gray-800 ml-auto shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          : "bg-gray-100 self-start text-gray-800 shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
      }`}
    >
      {message}
    </div>
  );
};

export default Message;
