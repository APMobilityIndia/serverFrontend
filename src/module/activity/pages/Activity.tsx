import React from "react";
import { Mail, FileText, X } from "lucide-react";

const Activity = () => {
  return (
    <div className="bg-purple-950 min-h-screen text-white p-4">
      {/* Header Section with Cards & Roulette */}
      <div className="bg-purple-900 rounded-xl p-4 mb-4 relative overflow-hidden">
        <div className="z-10 relative">
          <h2 className="font-medium text-lg mb-1">
            Invite friends and deposit
          </h2>
          <p className="text-xs text-gray-300 mb-2">
            Both parties can receive rewards.
          </p>
          <p className="text-xs text-gray-300">
            Invite friends to register and recharge to receive rewards.
          </p>

          <div className="mt-4">
            <p className="text-xs text-gray-300">Activity date:</p>
            <p className="text-xs">2025-04-10 ~ 2041-12-29</p>
          </div>
        </div>

        {/* Background Images - Casino Elements */}
        <div className="absolute right-0 top-0 h-full">
          <img
            src="/api/placeholder/200/200"
            alt="Casino elements"
            className="h-full object-cover"
          />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button className="flex items-center justify-center gap-2 bg-purple-900 rounded-xl py-3 px-4">
          <Mail size={20} />
          <span>Invitation rule</span>
        </button>
        <button className="flex items-center justify-center gap-2 bg-purple-900 rounded-xl py-3 px-4">
          <FileText size={20} />
          <span>Invitation record</span>
        </button>
      </div>

      {/* Bonus Section */}
      <div className="bg-purple-900 rounded-xl p-4 mb-6">
        {/* Bonus Label */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="bg-orange-500 text-white rounded-r-full pl-4 pr-6 py-1 -ml-4">
              Bonus
            </div>
            <div className="bg-gray-700 rounded-full p-1 ml-2">
              <X size={14} />
            </div>
          </div>
          <div className="text-xl font-bold">₹38.00</div>
        </div>

        {/* Number of Invitees */}
        <div className="bg-purple-800 rounded-lg p-4 mb-4 flex justify-between items-center">
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
