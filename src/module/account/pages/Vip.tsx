import { FiChevronLeft } from "react-icons/fi";
import { useState } from "react";

export default function Vip() {
  const [activeTab, setActiveTab] = useState("history");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B002C] to-[#2F124F] text-white px-4 pt-6 pb-10">
      {/* Header */}
      <div className="flex items-center mb-4">
        <FiChevronLeft size={24} className="text-white" />
        <h1 className="text-lg font-semibold flex-1 text-center -ml-6">VIP</h1>
      </div>

      {/* Profile Section */}
      <div className="bg-[#2F124F] rounded-lg border border-[#512B73] p-4 mb-6">
        <div className="flex items-center">
          <img
            src="/assets/profile.png"
            alt="Profile"
            className="w-16 h-16 rounded-full mr-4 object-cover"
          />
          <div>
            <p className="text-lg font-semibold">ANCHAL</p>
            <div className="flex items-center mt-1">
              <span className="text-[10px] bg-[#FFB743] text-[#1A0B2E] font-bold px-2 py-0.5 rounded-full mr-2">
                UID
              </span>
              <span className="text-xs bg-[#FFB743] text-[#1A0B2E] px-2 py-0.5 rounded-md font-medium">
                1597560
              </span>
            </div>
            <p className="text-xs text-gray-300 mt-1">
              Last Login: 2025-04-11 13:05:49
            </p>
          </div>
        </div>
      </div>

      {/* Experience & Payout Boxes */}
      <div className="flex justify-between mb-4">
        <div className="flex-1 bg-[#2F124F] rounded-xl border border-[#512B73] flex flex-col items-center py-3 mr-2">
          <p className="text-orange-400 font-bold text-sm">0 Exp</p>
          <p className="text-xs text-gray-300 mt-1">My Experience</p>
        </div>
        <div className="flex-1 bg-[#2F124F] rounded-xl border border-[#512B73] flex flex-col items-center py-3 ml-2">
          <p className="text-orange-400 font-bold text-sm">18 Days</p>
          <p className="text-xs text-gray-300 mt-1">Payout Time</p>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-[#2F124F] border border-[#512B73] rounded-md text-center text-xs text-gray-300 px-3 py-2 mb-4">
        VIP level rewards are settled at 2:00 a.m. on the first of every month
      </div>

      {/* VIP Image */}
      <div className="rounded-xl overflow-hidden border border-[#512B73]">
        <img
          src="/assets/vip_banner.png" // Replace with actual image path
          alt="VIP Banner"
          className="w-full object-cover"
        />
      </div>
      <div className="mt-6">
        {/* VIP1 Benefits Box */}
        <div className="border border-[#6660A4] rounded-lg p-4 bg-[#2F124F] mb-4">
          <h3 className="text-white text-sm font-semibold mb-3 border-b border-dashed border-[#6660A4] pb-2">
            VIP1 Benefits Level
          </h3>

          {/* Benefits List */}
          <div className="space-y-4">
            {[
              {
                icon: "/assets/gift.png",
                title: "Level up rewards",
                desc: "Each account can only receive 1 time",
                value: "60",
                remaining: "0",
              },
              {
                icon: "/assets/box.png",
                title: "Monthly Reward",
                desc: "Each account can only receive 1 time Per month",
                value: "3",
                remaining: "0",
              },
              {
                icon: "/assets/coin.png",
                title: "Rebate rate",
                desc: "Increase income of rebate",
                value: "0.04%",
                remaining: "",
              },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <img src={item.icon} alt={item.title} className="h-8 w-8" />
                  <div>
                    <p className="text-white text-sm font-medium">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-300">{item.desc}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-[#FFB743] text-[#1A0B2E] text-xs font-bold px-2 py-0.5 rounded-full inline-block mb-1">
                    {item.value}
                  </div>
                  {item.remaining !== "" && (
                    <div className="text-xs text-white text-center">
                      {item.remaining}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border border-[#6660A4] rounded-md overflow-hidden text-sm font-medium mb-4">
          <button
            onClick={() => setActiveTab("history")}
            className={`flex-1 py-2 text-center ${
              activeTab === "history"
                ? "text-green-400 border-b-2 border-green-400"
                : "text-white"
            }`}
          >
            History
          </button>
          <button
            onClick={() => setActiveTab("rules")}
            className={`flex-1 py-2 text-center ${
              activeTab === "rules"
                ? "text-green-400 border-b-2 border-green-400"
                : "text-white"
            }`}
          >
            Rules
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "history" ? (
          <div className="flex flex-col items-center py-10">
            <img
              src="/assets/nodata.png"
              alt="No data"
              className="w-16 h-16 opacity-50 mb-2"
            />
            <p className="text-sm text-gray-400 mb-4">No data.</p>
            <button className="bg-[#FF922E] text-white text-sm px-8 py-2 rounded-full">
              View All
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {[
              {
                id: "01",
                text: `There are 6 subordinate levels in inviting friends, if A invites B, then B is a level 1 subordinate of A. If B invites C, then C is a level 1 subordinate of B and also a level 2 subordinate of A. If C invites D, then D is a level 1 subordinate of C, at the same time a level 2 subordinate of B and also a level 3 subordinate of A.`,
              },
              {
                id: "02",
                text: `When inviting friends to register, you must send the invitation link provided or enter the invitation code manually so that your friends become your level 1 subordinates.`,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#2F124F] border border-[#6660A4] rounded-xl p-4 relative"
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FF922E] text-[#1A0B2E] font-bold px-4 py-1 rounded-full text-sm">
                  {item.id}
                </div>
                <p className="text-sm text-white mt-4 leading-relaxed text-justify">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
