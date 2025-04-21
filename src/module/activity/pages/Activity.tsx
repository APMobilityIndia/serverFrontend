import React from "react";
import { Mail, FileText, X } from "lucide-react";

const Activity = () => {
  return (
    <div
      style={{ backgroundColor: "transparent" }}
      className="min-h-screen text-white p-4"
    >
      {/* Header Section with Cards & Roulette */}
      <div
        className="mb-4 relative overflow-hidden bg-gradient-to-r from-purple-800 to-indigo-900 shadow-lg"
        style={{ borderRadius: "0px 0px 20px 20px" }}
      >
        {/* Image and Container 100% Width */}
        <div className="absolute inset-0">
          <img
            src="/assets/activitymain.png"
            alt="Casino elements"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="z-10 relative p-4">
          {/* Added a div to contain the text and apply left alignment */}
          <div className="text-left relative z-10">
            <h2 className="font-bold text-xl text-white mb-2">
              Invite friends and deposit
            </h2>
            <p className="text-sm text-gray-200 mb-2">
              Both parties can receive rewards.
            </p>
            <p className="text-sm text-gray-200 mb-4">
              Invite friends to register and recharge to receive rewards.
            </p>

            <div className="mt-4">
              <p className="text-xs text-gray-300">Activity date:</p>
              <p className="text-xs text-white">2025-04-10 ~ 2041-12-29</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="grid grid-cols-2 gap-0 mb-6 border-1 rounded-2xl w-70">
        <button
          style={{ backgroundColor: "#1B0831" }}
          className="flex flex-col items-center justify-start py-3 px-4 rounded-tl-2xl rounded-bl-2xl"
        >
          <Mail size={20} className="mb-1" /> {/* Added mb-1 for spacing */}
          <span className="text-sm">Invitation rule</span>
        </button>
        <button
          style={{ backgroundColor: "#1B0831" }}
          className="flex flex-col items-center justify-start py-3 px-4 rounded-tr-2xl rounded-br-2xl"
        >
          <FileText size={20} className="mb-1" /> {/* Added mb-1 for spacing */}
          <span className="text-sm">Invitation record</span>
        </button>
      </div>

      {/* Bonus Section */}
      <div
        style={{ backgroundColor: "#1B0831" }}
        className=" rounded-xl p-4 mb-6 border"
      >
        {/* Bonus Label */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div
              style={{
                backgroundColor: "#FF922E",
                borderWidth: 1,
                borderTopLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}
              className=" text-white rounded-r-full pl-4 pr-6 py-1"
            >
              Bonus
              <div className="bg-gray-700 rounded-full p-1 ml-2">
                <X size={14} />
              </div>
            </div>
          </div>
          <div className="text-xl font-bold">₹38.00</div>
        </div>

        {/* Number of Invitees */}
        <div
          style={{ backgroundColor: "#432566", borderWidth: 1 }}
          className=" rounded-lg p-4 mb-4 flex justify-between items-center"
        >
          <span>Number of Invitees</span>
          <span className="font-bold">1</span>
        </div>

        {/* Recharge per people */}
        <div className="bg-purple-800 rounded-lg p-4 mb-4 flex justify-between items-center">
          <span>Recharge per people</span>
          <span className="font-bold">₹300.00</span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-purple-800 rounded-lg p-4 text-center">
            <div className="font-bold mb-1">0/1</div>
            <div className="text-sm">Number of Invitees</div>
          </div>
          <div className="bg-purple-800 rounded-lg p-4 text-center">
            <div className="font-bold mb-1">0/1</div>
            <div className="text-sm">Deposit Number</div>
          </div>
        </div>

        {/* Status Button */}
        <button className="w-full bg-purple-800 rounded-lg p-3 text-center font-medium">
          Unfinished
        </button>
      </div>
    </div>
  );
};

export default Activity;
