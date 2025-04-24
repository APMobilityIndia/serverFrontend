import { FiChevronLeft } from "react-icons/fi";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";

export default function Vip() {
  const [activeTab, setActiveTab] = useState("history");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B002C] to-[#2F124F] text-white px-4 pt-6 pb-10 mb-10">
      {/* Header */}
      {/* <div className="flex items-center mb-4">
        <FiChevronLeft size={24} className="text-white" />
        <h1 className="text-lg font-semibold flex-1 text-center -ml-6">VIP</h1>
      </div> */}

      {/* Profile Section */}
      <div className="flex p-4">
        <div className="mr-3">
          <img
            src="/assets/profile.png"
            alt="User avatar"
            className="rounded-full border-2 border-white w-20 h-20 object-cover"
          />
        </div>
        <div className="text-left space-y-2">
          <p className="font-bold text-sm ml-1">MEMBERNNG9ADSF</p>

          <div
            className="flex items-center justify-evenly gap-2 px-4 w-fit h-7"
            style={{
              backgroundColor: "#FF922E",
              borderRadius: 30,
            }}
          >
            <span className="text-sm font-medium text-white ">
              UID | 1597560
            </span>
            <button style={{ backgroundColor: "transparent" }}>
              <FaRegCopy className="text-white text-base" />
            </button>
          </div>

          <div className="text-sm text-white ml-1">
            Last Login: 2025-04-11 13:05:49
          </div>
        </div>
      </div>

      {/* Experience & Payout Boxes */}
      <div className="flex justify-between mb-4 mt-2">
        <div
          style={{ backgroundColor: "#1B0831", borderWidth: 0.7 }}
          className="flex-1 rounded-xl border flex flex-col items-center py-3 mr-2"
        >
          <p className="text-orange-400 font-bold text-sm">0 Exp</p>
          <p className="text-xs text-gray-300 mt-1">My Experience</p>
        </div>
        <div
          style={{ backgroundColor: "#1B0831", borderWidth: 0.7 }}
          className="flex-1 rounded-xl border  flex flex-col items-center py-3 ml-2"
        >
          <p className="text-orange-400 font-bold text-sm">18 Days</p>
          <p className="text-xs text-gray-300 mt-1">Payout Time</p>
        </div>
      </div>

      {/* Info Banner */}
      <div
        style={{ backgroundColor: "#1B0831", borderWidth: 0.7 }}
        className=" border rounded-md text-center text-xs text-gray-300 px-3 py-2 mb-4"
      >
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
        <div
          style={{ backgroundColor: "#1B0831", borderWidth: 0.7 }}
          className="border  rounded-lg p-4  mb-4"
        >
          <h3 className="text-white text-sm font-semibold mb-3 border-b border-dashed border-[#6660A4] pb-2">
            VIP1 Benefits Level
          </h3>

          {/* Benefits List */}
          <div className="space-y-4">
            {[
              {
                icon: "/assets/vip1.png",
                title: "Level up rewards",
                desc: "Each account can only receive 1 time",
                value: "60",
                remaining: "0",
              },
              {
                icon: "/assets/vip2.png",
                title: "Monthly Reward",
                desc: "Each account can only receive 1 time Per month",
                value: "3",
                remaining: "0",
              },
              {
                icon: "/assets/vip3.png",
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
                    <p className="text-white text-sm font-medium text-left">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-300 text-left">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div
                    style={{ borderWidth: 1, borderColor: "#fff" }}
                    className="text-[#fff] text-xs font-bold h-8 w-18 rounded-full inline-flex items-center justify-center gap-2 mb-1"
                  >
                    <img src="/assets/card.png" className="w-5 h-5" />
                    <span>{item.value}</span>
                  </div>

                  {item.remaining !== "" && (
                    <div
                      style={{ borderWidth: 1, borderColor: "#fff" }}
                      className="text-[#fff] text-xs font-bold h-8 w-18 rounded-full inline-flex items-center justify-center gap-2 mb-1"
                    >
                      <img src="/assets/life.png" className="w-5 h-5" />
                      <span>{item.remaining}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border border-[gray] rounded-md overflow-hidden text-sm font-medium mb-4">
          <button
            onClick={() => setActiveTab("history")}
            className={`flex-1 py-2 text-center ${
              activeTab === "history"
                ? "text-green-600 border-b-2 border-green-600"
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
              className="w-26 h-26 opacity-50 mb-2"
            />
            <p className="text-sm text-gray-400 mb-4">No data.</p>
            <button
              style={{ borderWidth: 1 }}
              className="bg-[#FF922E] text-white text-sm px-8 py-2 rounded-full w-60 mb-10"
            >
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
                <div
                  style={{}}
                  className="absolute -top-0 left-1/2 transform -translate-x-1/2 bg-[#FF922E] text-[#1A0B2E] font-bold px-4 py-1 rounded-b-full text-sm w-30"
                >
                  {item.id}
                </div>
                <p className="text-sm text-white mt-10 leading-relaxed text-justify">
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
