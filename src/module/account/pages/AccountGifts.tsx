import React, { useState } from "react";

export default function AccountGifts() {
  const [giftCode, setGiftCode] = useState("");

  const handleReceive = () => {
    if (giftCode.trim() === "") {
      alert("Please enter a gift code.");
      return;
    }
    console.log("Gift code submitted:", giftCode);
    // Call API or handle redeem logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B002C] to-[#2F124F] text-white p-4 pb-20">
      {/* Top Banner */}
      <div className="w-full rounded-b-xl overflow-hidden mb-6">
        <img
          src="/assets/gift-banner.png" // Replace with your actual banner image
          alt="Gift Banner"
          className="w-full object-cover"
        />
      </div>

      {/* Gift Input Card */}
      <div className="bg-[#2F124F] border border-[#512B73] rounded-xl p-4 mb-6">
        <h2 className="text-white font-semibold mb-1">Hi,</h2>
        <p className="text-sm text-gray-300 mb-4">We have a gift for you</p>
        <p className="text-xs text-gray-400 mb-2">
          Please enter the gift code below.
        </p>

        <input
          type="text"
          value={giftCode}
          onChange={(e) => setGiftCode(e.target.value)}
          placeholder="Please enter the gift code."
          className="w-full bg-transparent border border-[#B43A6A] text-white rounded-full px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none mb-4"
        />

        <button
          onClick={handleReceive}
          className="w-full bg-[#B43A6A] rounded-full py-3 font-semibold text-white"
        >
          Receive
        </button>
      </div>

      {/* History Section */}
      <div className="bg-[#2F124F] border border-[#512B73] rounded-xl p-4 text-center">
        <div className="flex items-center justify-center mb-4">
          <img
            src="/assets/history.png"
            alt="History"
            className="w-5 h-5 mr-2"
          />
          <p className="text-sm font-semibold">History</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/assets/nodata.png"
            alt="No data"
            className="w-16 h-16 opacity-40 mb-2"
          />
          <p className="text-sm text-gray-400">No data.</p>
        </div>
      </div>
    </div>
  );
}
