import React, { useState } from "react";
import { FiArrowLeft, FiChevronDown } from "react-icons/fi";

const WalletDepositHistory = () => {
  const [filter, setFilter] = useState("All");
  const [date, setDate] = useState("");

  return (
    <div className="bg-[#1A0B2E] min-h-screen text-white px-4 py-2 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between py-2 border-b border-gray-600">
        <FiArrowLeft size={20} />
        <span>Deposit History</span>
        <span></span>
      </div>

      {/* Payment Methods */}
      <div className="grid grid-cols-3 gap-3 mt-4 mb-4">
        {["manualupi.png", "gatewayupi.png", "usdt.png"].map((img, idx) => (
          <div
            key={idx}
            className="bg-white rounded-md overflow-hidden text-center py-2"
          >
            <img
              src={`/assets/${img}`}
              alt="method"
              className="w-full h-10 object-contain"
            />
            <p className="text-sm text-black">
              {idx === 0
                ? "Manual UPI-QR"
                : idx === 1
                ? "Payment Gateway"
                : "USTD"}
            </p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex justify-between mb-4">
        <div className="relative w-[48%]">
          <button className="w-full flex justify-between items-center px-4 py-2 border border-gray-500 rounded-md bg-transparent text-sm">
            {filter}
            <FiChevronDown size={18} />
          </button>
        </div>
        <div className="relative w-[48%]">
          <button className="w-full flex justify-between items-center px-4 py-2 border border-gray-500 rounded-md bg-transparent text-sm">
            {date || "Choose a date"}
            <FiChevronDown size={18} />
          </button>
        </div>
      </div>

      {/* History List */}
      <div className="text-lg font-bold mb-2">Deposit History</div>

      <div className="border border-purple-600 rounded-md p-4 mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-xs bg-orange-500 text-white px-3 py-1 rounded-full">
            Deposit
          </span>
          <span className="text-xs text-orange-400">To be Paid</span>
        </div>
        <div className="text-sm mb-1">
          Balance: <span className="text-orange-400 font-bold">₹30000.00</span>
        </div>
        <div className="text-sm mb-1">Type: paytm-7day</div>
        <div className="text-sm mb-1">Date: 2025-04-12 21:45:09</div>
        <div className="text-sm mb-3">Order ID: RC2025041221450925443717c</div>
        <button className="w-full bg-orange-500 py-2 rounded-full text-white font-semibold text-sm">
          Submit Receipt
        </button>
      </div>

      <div className="text-center text-gray-400 text-sm mb-4">No More</div>
    </div>
  );
};

export default WalletDepositHistory;
