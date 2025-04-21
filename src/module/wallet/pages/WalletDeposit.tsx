import React, { useState } from "react";
import { FiArrowLeft, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const WalletDeposit = () => {
  const [selectedChannel, setSelectedChannel] = useState("Paytm-7Day");
  const [amount, setAmount] = useState("");

  const predefinedAmounts = [
    "200",
    "500",
    "800",
    "1000",
    "2000",
    "3000",
    "5000",
    "10000",
    "20000",
    "30000",
    "40000",
    "50000",
  ];

  const formatAmount = (val: string) => {
    return `₹${Number(val).toLocaleString()}`;
  };

  return (
    <div className="bg-[#1A0B2E] min-h-screen text-white px-4 py-2 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between py-2 border-b border-gray-600">
        <FiArrowLeft size={20} />
        <span>Deposit</span>
        <Link to="/walletdeposithistory">
          <span className="text-sm text-purple-400">Deposit History</span>
        </Link>
      </div>

      {/* Balance Card */}
      <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-xl p-4 mt-4 mb-4 text-white shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">Balance</p>
            <h2 className="text-2xl font-bold">₹0.00</h2>
          </div>
          <div className="text-right text-lg font-semibold">**** ****</div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="grid grid-cols-3 gap-3 mb-4">
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

      {/* Channel Selection */}
      <div className="border border-purple-500 rounded-md p-3 mb-6">
        <h3 className="text-sm text-yellow-500 mb-2">Select Channel</h3>
        <div className="flex gap-2">
          {[
            { name: "Paytm-7Day", balance: "20k-50k" },
            { name: "Paytm-RUJIA", balance: "200-50k" },
          ].map((channel) => (
            <div
              key={channel.name}
              className={`flex-1 p-3 rounded-md text-center cursor-pointer transition duration-200 text-sm ${
                selectedChannel === channel.name
                  ? "bg-orange-500 text-white"
                  : "bg-purple-800"
              }`}
              onClick={() => setSelectedChannel(channel.name)}
            >
              <p>{channel.name}</p>
              <p className="text-xs">Balance: {channel.balance}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Deposit Amount */}
      <div className="border border-purple-500 rounded-md p-3 mb-6">
        <h3 className="text-sm mb-3">💳 Deposit Amount</h3>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {predefinedAmounts.map((amt) => (
            <div
              key={amt}
              className={`border text-center py-2 rounded-md text-sm cursor-pointer transition duration-150 ${
                amount === amt
                  ? "bg-orange-500 text-white border-transparent"
                  : "border-gray-500"
              }`}
              onClick={() => setAmount(amt)}
            >
              {`₹${Number(amt).toLocaleString()}`}
            </div>
          ))}
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="₹200.00 - 50000.00"
            className="w-full rounded-md p-3 text-black"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {amount && (
            <FiX
              size={20}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-black"
              onClick={() => setAmount("")}
            />
          )}
        </div>
        <button className="mt-4 w-full bg-orange-500 py-3 rounded-full font-semibold text-white">
          Deposit
        </button>
      </div>

      {/* Rules */}
      <div className="border border-purple-500 rounded-md p-4 mb-10">
        <div className="text-xs text-orange-400 font-semibold mb-1">Rule</div>
        <p className="text-sm text-gray-300 italic mb-1">
          Recharge instructions
        </p>
        <ul className="text-xs text-gray-300 list-disc pl-4 space-y-1">
          <li>
            If the transfer time is up, please fill out the deposit form again.
          </li>
          <li>
            The transfer amount must match the order you created, otherwise the
            money cannot be credited successfully.
          </li>
          <li>
            If you transfer the wrong amount, our company will not be
            responsible for the lost amount!
          </li>
          <li>
            Note: do not cancel the deposit order after the money has been
            transferred.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WalletDeposit;
