import React, { useState } from "react";

export default function GamesStats() {
  const [activeTab, setActiveTab] = useState("Today");

  const tabs = ["Today", "Yesterday", "This Week", "This Month"];

  const sections = [
    { label: "Lottery", icon: "🎰" },
    { label: "Slot", icon: "🎮" },
    { label: "Casino", icon: "♠️" },
    { label: "Sports", icon: "⚽" },
    { label: "Lottery", icon: "🎰" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B002C] to-[#2F124F] text-white p-4 pb-24">
      {/* Tabs */}
      <div className="flex justify-around mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1 rounded-full border text-sm font-medium ${
              activeTab === tab
                ? "bg-green-500 text-black"
                : "border-white text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Total Bet Card */}
      <div className="bg-[#2F124F] border border-[#512B73] text-center py-6 rounded-xl mb-6">
        <p className="text-[#FF922E] text-lg font-bold mb-1">₹0.00</p>
        <p className="text-sm text-white">Total Bet</p>
      </div>

      {/* Stats Cards */}
      {sections.map((section, index) => (
        <div
          key={index}
          className="bg-[#2F124F] border border-[#512B73] rounded-xl p-4 mb-4"
        >
          {/* Header */}
          <div className="flex items-center mb-3">
            <span className="text-lg mr-2">{section.icon}</span>
            <h2 className="text-white font-semibold text-sm">
              {section.label}
            </h2>
          </div>

          {/* Stats */}
          <div className="space-y-2 text-sm text-white">
            <div className="flex justify-between">
              <span className="text-orange-300">♦ Total Bet</span>
              <span>₹0.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-orange-300">♦ Number of bets</span>
              <span>₹0.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-orange-300">♦ Winning Amount</span>
              <span>₹0.00</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
