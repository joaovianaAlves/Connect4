import React from "react";

export default function Slots({ ch, y, x, onClick }) {
  return (
    <div className="flex justify-center items-center m-1" onClick={onClick}>
      {ch === "X" ? (
        <div
          x={x}
          y={y}
          className="w-16 h-12 bg-red-500 flex items-center justify-center rounded-full text-white text-lg"
        ></div>
      ) : ch === "O" ? (
        <div
          x={x}
          y={y}
          className="w-16 h-12 bg-blue-500 flex items-center justify-center rounded-full text-white text-lg"
        ></div>
      ) : (
        <div
          x={x}
          y={y}
          className="w-20 h-12 bg-white flex items-center justify-center rounded-full text-black text-lg"
        ></div>
      )}
    </div>
  );
}
