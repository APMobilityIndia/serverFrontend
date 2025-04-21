import { FiChevronLeft, FiChevronDown } from "react-icons/fi";
import { useState } from "react";

export default function TransactionHistory() {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B002C] to-[#2F124F] text-white p-4">
      {/* Header */}
      <div className="flex items-center mb-4">
        <FiChevronLeft size={24} className="text-white" />
        <h1 className="text-lg font-semibold flex-1 text-center -ml-6">
          Transaction History
        </h1>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-10">
        {/* Type Filter */}
        <div className="flex items-center justify-between w-1/2 border border-white rounded-md px-3 py-2">
          <span className="text-sm">{selectedType}</span>
          <FiChevronDown />
        </div>

        {/* Date Filter */}
        <div className="flex items-center justify-between w-1/2 border border-white rounded-md px-3 py-2">
          <span className="text-sm text-gray-300">
            {selectedDate || "Choose a date"}
          </span>
          <FiChevronDown />
        </div>
      </div>

      {/* No Data UI */}
      <div className="flex flex-col items-center mt-16">
        <img
          src="/assets/nodata.png"
          alt="No data"
          className="w-16 h-16 opacity-40 mb-2"
        />
        <p className="text-sm text-gray-400">No data.</p>
      </div>
    </div>
  );
}
