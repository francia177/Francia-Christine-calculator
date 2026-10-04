import React from "react";

function Guide() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">User Guide</h2>
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h3 className="text-lg font-semibold mb-2">How to Use</h3>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Click number buttons (0–9) to enter values.</li>
          <li>Use operator buttons (+, −, ×, ÷) for calculations.</li>
          <li>Press "=" or Enter key to see the result.</li>
          <li>Press "C" or Backspace to clear/reset.</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Supported Operations</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Addition (+)</li>
          <li>Subtraction (−)</li>
          <li>Multiplication (×)</li>
          <li>Division (÷)</li>
        </ul>
      </div>
    </div>
  );
}

export default Guide;
