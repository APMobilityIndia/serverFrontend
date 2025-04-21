import React, { useState } from "react";
import { Search, ChevronDown, ChevronRight } from "lucide-react";

const SubordinateData = () => {
  const [allValue, setAllValue] = useState("All");
  const [dateValue, setDateValue] = useState("2025-04-10");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Title */}
        <div className="flex items-center gap-2">
          <ChevronRight className="w-6 h-6 text-gray-400 rotate-180" />
          <h1 className="text-2xl font-semibold text-white">
            Subordinates Data
          </h1>
        </div>

        {/* Search and Filters */}
        <div className="space-y-4">
          <div className="flex items-center bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
            <Search className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search Subordinates UID"
              className="flex-1 bg-transparent text-white placeholder:text-gray-400 outline-none"
            />
          </div>
          <div className="flex gap-4">
            {/* Custom Select Dropdown for 'All' */}
            <div className="relative">
              <select
                value={allValue}
                onChange={(e) => setAllValue(e.target.value)}
                className="w-[180px] bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option
                  value="All"
                  className="bg-gray-800 text-white hover:bg-white/10"
                >
                  All
                </option>
                <option
                  value="Direct"
                  className="bg-gray-800 text-white hover:bg-white/10"
                >
                  Direct
                </option>
                <option
                  value="Indirect"
                  className="bg-gray-800 text-white hover:bg-white/10"
                >
                  Indirect
                </option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Custom Select Dropdown for 'Date' */}
            <div className="relative">
              <select
                value={dateValue}
                onChange={(e) => setDateValue(e.target.value)}
                className="w-[180px] bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option
                  value="2025-04-10"
                  className="bg-gray-800 text-white hover:bg-white/10"
                >
                  2025-04-10
                </option>
                <option
                  value="2025-04-09"
                  className="bg-gray-800 text-white hover:bg-white/10"
                >
                  2025-04-09
                </option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Data Display */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/10 shadow-lg">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-2xl font-bold text-yellow-400">0</p>
              <p className="text-sm text-gray-400">Deposit Number</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-yellow-400">0</p>
              <p className="text-sm text-gray-400">Deposit Amount</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-yellow-400">0</p>
              <p className="text-sm text-gray-400">Number of bettors</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-yellow-400">0</p>
              <p className="text-sm text-gray-400">Total bet</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-yellow-400">0</p>
              <p className="text-sm text-gray-400">
                Number of people making first deposit
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-yellow-400">0</p>
              <p className="text-sm text-gray-400">First deposit amount</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubordinateData;
