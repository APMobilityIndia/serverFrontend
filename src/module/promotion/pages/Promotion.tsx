import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Promotion = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Partner Reward", route: "/partnerreward" },
    { label: "Invitation Code", route: "/invitationrules" },
    { label: "Subordinate Data", route: "/subordinatedata" },
    { label: "Commission Detail", route: "/commission-detail" },
    { label: "Invitation Rules", route: "/invitationrules" },
    { label: "Agent Line customer Service", route: "/agent-support" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Top Section */}
        <div className="text-center space-y-3">
          <p className="text-lg text-gray-300">Yesterday's Total Commission</p>
          <h1 className="text-4xl font-bold text-yellow-400">0</h1>
          <p className="text-sm text-gray-400">
            Upgrade the level to increase commission income
          </p>
        </div>

        {/* Data Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Direct Subordinates */}
          <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10 shadow-lg">
            <h2 className="text-lg font-semibold text-white mb-4">
              Direct Subordinates
            </h2>
            {[
              "Number of registration",
              "Deposit Number",
              "Deposit Amount",
              "Number of people making first deposit",
            ].map((text) => (
              <div
                key={text}
                className="flex justify-between text-sm text-white/80 py-1"
              >
                <span>{text}</span>
                <span>0</span>
              </div>
            ))}
          </div>

          {/* Team Subordinates */}
          <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10 shadow-lg">
            <h2 className="text-lg font-semibold text-white mb-4">
              Team Subordinates
            </h2>
            {[
              "Number of registration",
              "Deposit Number",
              "Deposit Amount",
              "Number of people making first deposit",
            ].map((text) => (
              <div
                key={text}
                className="flex justify-between text-sm text-white/80 py-1"
              >
                <span>{text}</span>
                <span>0</span>
              </div>
            ))}
          </div>
        </div>

        {/* Invitation Link */}
        <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-full shadow-lg hover:scale-105 transition">
          Invitation Link
        </button>

        {/* Menu Items with Navigation */}
        <div className="space-y-3">
          {menuItems.map(({ label, route }) => (
            <div
              key={label}
              className="bg-white/5 rounded-xl p-4 flex items-center justify-between border border-white/10 shadow-lg cursor-pointer hover:bg-white/10 transition"
              onClick={() => navigate(route)}
            >
              <span className="text-sm font-medium text-white">{label}</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          ))}
        </div>

        {/* Promotion Data */}
        <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10 shadow-lg">
          <h2 className="text-lg font-semibold text-white mb-4">
            Promotion Data
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { label: "This Week", value: "0" },
              { label: "Total Commission", value: "0" },
              { label: "Total Number of Subordinates in the team", value: "0" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-3xl font-bold text-yellow-400">{value}</p>
                <p className="text-sm text-gray-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
