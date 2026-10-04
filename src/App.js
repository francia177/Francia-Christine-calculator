import React, { useState } from "react";
import Calculator from "./lab1";
import Guide from "./Guide.jsx";

function App() {
  const [page, setPage] = useState("calculator");

  return (
    <div className="flex flex-col min-h-screen">
      {/* 🔝 Navigation Bar */}
      <header className="bg-gradient-to-r from-pink-400 to-blue-400 shadow-md">
        <div className="flex justify-between items-center px-6 py-3">
          <h1 className="text-white font-bold text-xl">Christine's Calculator</h1>
          <nav className="flex gap-4">
            <button
              onClick={() => setPage("calculator")}
              className={`px-3 py-1 rounded transition ${
                page === "calculator"
                  ? "bg-white text-pink-600 font-semibold"
                  : "bg-pink-200 text-white hover:bg-pink-300"
              }`}
            >
              Calculator
            </button>
            <button
              onClick={() => setPage("guide")}
              className={`px-3 py-1 rounded transition ${
                page === "guide"
                  ? "bg-white text-blue-600 font-semibold"
                  : "bg-blue-200 text-white hover:bg-blue-300"
              }`}
            >
              User Guide
            </button>
          </nav>
        </div>
      </header>

      {/* 📄 Page Content */}
      <main className="flex-grow">
        {page === "calculator" ? <Calculator /> : <Guide />}
      </main>

      {/* 🔻 Footer */}
      <footer className="bg-gray-200 text-center py-3">
        <p className="text-sm text-gray-600">
          © 2026 Christine's Calculator | BSIT Project
        </p>
      </footer>
    </div>
  );
}

export default App;
