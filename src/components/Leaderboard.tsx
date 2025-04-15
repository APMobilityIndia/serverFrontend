import React from "react";

const earningsData = [
  { rank: 2, name: "Zac", amount: "₹360954", avatar: "/assets/Person2.png" },
  { rank: 1, name: "Naomi", amount: "₹360954", avatar: "/assets/Person1.png" },
  { rank: 3, name: "Mia", amount: "₹360954", avatar: "/assets/Person3.png" },
];

const winningData = Array(5).fill({
  username: "Mem***EHP",
  avatar: "/assets/profile.png",
  gameImage: "/assets/wheel.png",
  amount: "₹18.00",
});

const listData = [
  { rank: 4, amount: "₹1888600.00" },
  { rank: 5, amount: "₹185600.00" },
  { rank: 6, amount: "₹76878.00" },
  { rank: 7, amount: "₹187676.00" },
  { rank: 8, amount: "₹188732.00" },
  { rank: 9, amount: "₹134348.00" },
];

// URL to your podium image
const podiumImageUrl = "/assets/podium.png"; // Replace with your actual image path

const Leaderboard = () => {
  return (
    <div className="px-3 pb-6">
      {/* Winning Information Section */}
      <h2 className="text-white font-bold text-lg mb-3">Winning Information</h2>
      <div className="space-y-3">
        {winningData.map((item, index) => (
          <div
            key={index}
            className={`flex items-center rounded-sm px-3 py-4 ${
              index % 2 === 0 ? "bg-[rgba(131,34,117,0.3)]" : "bg-transparent"
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
            <div className="bg-gradient-to-r from-[#B00341] to-[#8D2579] text-white px-5 py-2 rounded-full text-sm">
              {item.amount}
            </div>
          </div>
        ))}
      </div>

      {/* Earnings Chart Section */}
      <h2 className="text-white font-bold text-lg mt-8 mb-4">
        Today's Earnings Chart
      </h2>

      {/* Podium Section with Image */}
      <div className="relative pb-8 pt-16 mt-20">
        {/* Podium Image */}
        <div className="w-full flex justify-center">
          <img
            src="/assets/Leaderboard_Stages.png"
            alt="Podium"
            className="w-4/5 h-auto"
          />
        </div>

        {/* Position Avatars */}
        {/* Position Avatars */}
        <div className="absolute top-0 left-0 w-full">
          {/* 2nd Place Avatar */}
          <div className="absolute -top-3 left-1/5 -ml-3">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-gray-300 overflow-hidden">
                <img
                  src={earningsData.find((item) => item.rank === 2)?.avatar}
                  alt="2nd Place"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white text-xs font-medium mt-1">
                {earningsData.find((item) => item.rank === 2)?.name}
              </div>
              <div className="text-gray-300 text-sm font-bold">
                {earningsData.find((item) => item.rank === 2)?.amount}
              </div>
            </div>
          </div>

          {/* 1st Place Avatar */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center">
              {/* Crown */}
              <div className="absolute -top-4 w-6 h-6 text-pink-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 1L9 9H2L7 14.5L5 22L12 17.5L19 22L17 14.5L22 9H15L12 1Z" />
                </svg>
              </div>
              <div className="w-16 h-16 rounded-full border-2 border-pink-500 overflow-hidden">
                <img
                  src={earningsData.find((item) => item.rank === 1)?.avatar}
                  alt="1st Place"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white text-xs font-medium mt-1">
                {earningsData.find((item) => item.rank === 1)?.name}
              </div>
              <div className="text-pink-500 text-sm font-bold">
                {earningsData.find((item) => item.rank === 1)?.amount}
              </div>
            </div>
          </div>

          {/* 3rd Place Avatar */}
          <div className="absolute top-2 right-1/5 -mr-4">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-orange-400 overflow-hidden">
                <img
                  src={earningsData.find((item) => item.rank === 3)?.avatar}
                  alt="3rd Place"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white text-xs font-medium mt-1">
                {earningsData.find((item) => item.rank === 3)?.name}
              </div>
              <div className="text-orange-400 text-sm font-bold">
                {earningsData.find((item) => item.rank === 3)?.amount}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ranking List */}
      <div className="space-y-3 -mt-10 ">
        {listData.map((item, i) => (
          <div
            key={i}
            className={`flex items-center rounded-lg px-3 py-4 ${
              i % 2 === 0 ? "bg-[rgba(131,34,117,0.3)]" : "bg-transparent"
            }`}
          >
            <span className="text-white text-sm font-bold mr-3">
              {item.rank}.
            </span>
            <img
              src="/assets/profile.png"
              alt="avatar"
              className="w-10 h-10 rounded-full mr-2 object-cover"
            />
            <div className="flex-1">
              <div className="font-semibold text-white text-sm">Mem***EHP</div>
              <div className="text-xs text-orange-400 font-semibold">
                WINNING AMOUNT:
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#B00341] to-[#8D2579] text-white px-5 py-2 rounded-full text-sm">
              {item.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
