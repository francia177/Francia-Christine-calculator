import React, { useState, useEffect } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => setInput(input + value);
  const handleClear = () => setInput("");
  const handleCalculate = () => {
    try {
      const result = eval(input.replace("×", "*").replace("÷", "/"));
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (/[0-9]/.test(e.key)) {
        setInput((prev) => prev + e.key);
      } else if (["+", "-", "*", "/"].includes(e.key)) {
        setInput((prev) => prev + e.key);
      } else if (e.key === "Enter") {
        handleCalculate();
      } else if (e.key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
      } else if (e.key === ".") {
        setInput((prev) => prev + ".");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <h2 className="text-2xl font-bold mb-4 text-pink-700">
        Christine's Calculator
      </h2>
      <div className="w-72 bg-white rounded-lg shadow-lg p-4">
        <div className="border rounded mb-4 p-2 text-right text-lg font-mono bg-gray-50">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["7","8","9","÷",
            "4","5","6","×",
            "1","2","3","-",
            "0",".","+","="].map((btn) => (
            <button
              key={btn}
              onClick={() =>
                btn === "=" ? handleCalculate() : handleClick(btn)
              }
              className="bg-pink-300 hover:bg-pink-400 text-white font-bold py-2 rounded"
            >
              {btn}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="col-span-4 bg-red-400 hover:bg-red-500 text-white font-bold py-2 rounded"
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
