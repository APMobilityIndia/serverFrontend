import { FiChevronLeft, FiChevronDown } from "react-icons/fi";
import { useState } from "react";

export default function GameHistory() {
  const [activeTab, setActiveTab] = useState("Lottery");
  const games = ["Lottery", "Casino", "Sports", "Rummy"];
  const gameOptions = ["WIN GO", "WIN 10", "BIG 5"];
  const [selectedGame, setSelectedGame] = useState(gameOptions[0]);
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B002C] to-[#2F124F] text-white p-4">
      {/* Header */}
      {/* <div className="flex items-center mb-4">
        <FiChevronLeft size={24} className="text-white" />
        <h1 className="text-lg font-semibold flex-1 text-center -ml-6">
          Rebate Ratio
        </h1>
      </div> */}

      {/* Game Tabs */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {games.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-2 border rounded-md text-sm font-medium ${
              activeTab === tab
                ? "bg-white text-[#2F124F]"
                : "border-white text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dropdowns */}
      <div className="flex gap-3 mb-8">
        {/* Game Selection */}
        <div className="flex items-center justify-between w-1/2 border border-white rounded-md px-3 py-2">
          <span className="text-sm">{selectedGame}</span>
          <FiChevronDown />
        </div>

        {/* Date Picker Placeholder */}
        <div className="flex items-center justify-between w-1/2 border border-white rounded-md px-3 py-2">
          <span className="text-sm text-gray-300">
            {selectedDate || "Choose a date"}
          </span>
          <FiChevronDown />
        </div>
      </div>

      {/* No Data Display */}
      <div className="flex flex-col items-center mt-16">
        <img
          src="/assets/nodata.png"
          alt="No data"
          className="w-20 h-20 opacity-40 mb-2"
        />
        <p className="text-gray-400 text-sm">No data.</p>
      </div>
    </div>
  );
}
