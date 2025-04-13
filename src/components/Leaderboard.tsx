import React from "react";
import crownIcon from "/assets/crown.png"; // Add crown image if needed

const winningData = Array(5).fill({
  username: "Mem***EHP",
  avatar: "/assets/avatar.png",
  gameImage: "/assets/wheel.png",
  amount: "₹18.00",
});

const earningsData = [
  { rank: 1, name: "Naomi", amount: "₹360954", avatar: "/assets/avatar1.png" },
  { rank: 2, name: "Zac", amount: "₹360954", avatar: "/assets/avatar2.png" },
  { rank: 3, name: "Mia", amount: "₹360954", avatar: "/assets/avatar3.png" },
];

const listData = [
  { rank: 4, amount: "₹1888600.00" },
  { rank: 5, amount: "₹185600.00" },
  { rank: 6, amount: "₹76878.00" },
  { rank: 7, amount: "₹187676.00" },
  { rank: 8, amount: "₹188732.00" },
  { rank: 9, amount: "₹134348.00" },
];

const Leaderboard: React.FC = () => {
  return (
    <div className="px-3 pb-6">
      {/* Winning Information Section */}
      <h2 className="text-white font-bold text-lg mb-3">Winning Information</h2>
      <div className="space-y-3">
        {winningData.map((item, index) => (
          <div
            key={index}
            className={`flex items-center rounded-lg px-3 py-2 ${
              index % 2 === 0
                ? "bg-gradient-to-r from-[#321456] to-[#290e3f]"
                : "bg-gradient-to-r from-[#220a32] to-[#1a082b]"
            }`}
          >
            <img
              src={item.gameImage}
              alt="game"
              className="w-12 h-12 rounded-lg mr-2 object-cover"
            />
            <img
              src={item.avatar}
              alt="avatar"
              className="w-10 h-10 rounded-full mr-2 object-cover"
            />
            <div className="flex-1">
              <div className="font-semibold text-white text-sm">
                {item.username}
              </div>
              <div className="text-xs text-orange-400 font-semibold">
                WINNING AMOUNT:
              </div>
            </div>
            <div className="bg-pink-600 text-white px-4 py-1 rounded-full text-sm">
              {item.amount}
            </div>
          </div>
        ))}
      </div>

      {/* Earnings Chart Section */}
      <h2 className="text-white font-bold text-lg mt-8 mb-4">
        Today’s Earnings Chart
      </h2>

      {/* Top 3 Podium */}
      <div className="flex justify-center gap-3 mb-4 relative">
        {earningsData.map((user) => (
          <div
            key={user.rank}
            className={`flex flex-col items-center ${
              user.rank === 1 ? "z-20 scale-125" : "z-10"
            }`}
          >
            <div
              className={`w-16 h-16 rounded-full border-2 border-pink-500 relative overflow-hidden mb-1 shadow-lg`}
            >
              <img
                src={user.avatar}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white text-xs font-medium">
              {user.name}
            </div>
            <div className="text-pink-400 text-xs font-bold">
              {user.amount}
            </div>
            <div
              className={`mt-1 w-12 h-5 flex items-center justify-center text-xs font-bold rounded-t-sm ${
                user.rank === 1
                  ? "bg-purple-600 text-white"
                  : user.rank === 2
                  ? "bg-gray-400 text-black"
                  : "bg-orange-400 text-black"
              }`}
            >
              {user.rank === 1 ? "1st" : user.rank === 2 ? "2nd" : "3rd"}
            </div>
          </div>
        ))}
      </div>

      {/* Ranking List */}
      <div className="space-y-3">
        {listData.map((item, i) => (
          <div
            key={i}
            className={`flex items-center rounded-lg px-3 py-2 ${
              i % 2 === 0
                ? "bg-gradient-to-r from-[#321456] to-[#290e3f]"
                : "bg-gradient-to-r from-[#220a32] to-[#1a082b]"
            }`}
          >
            <span className="text-white text-sm font-bold mr-3">
              {item.rank}.
            </span>
            <img
              src="/assets/avatar.png"
              alt="avatar"
              className="w-10 h-10 rounded-full mr-2 object-cover"
            />
            <div className="flex-1">
              <div className="font-semibold text-white text-sm">Mem***EHP</div>
              <div className="text-xs text-orange-400 font-semibold">
                WINNING AMOUNT:
              </div>
            </div>
            <div className="bg-pink-600 text-white px-4 py-1 rounded-full text-sm">
              {item.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
