import React from "react";
import { Copy } from "lucide-react";

const PartnerReward = () => {
  return (
    <div className=" min-h-screen text-white">
      {/* Referral Screen */}
      <div className="p-4">
        {/* Header with roulette image */}
        <div
          style={{ backgroundColor: "#1B0831", borderWidth: 1 }}
          className="rounded-xl  p-4 mb-6 relative overflow-hidden"
        >
          <div className="flex flex-col">
            <p className="text-sm mb-2">
              Invite friends to get maximum rewards
            </p>
            <button className="bg-orange-500 text-white rounded-full py-2 px-4 w-32 font-semibold">
              ₹388.00
            </button>
          </div>
          <div className="absolute right-0 top-0 h-full flex items-center">
            <div className="flex">
              <img
                src="/assets/promotionBanner.png"
                alt="Roulette with dice and cards"
                className="h-fu object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="space-y-4 mb-6">
          <div
            style={{ backgroundColor: "#1B0831", borderWidth: 1 }}
            className=" rounded-xl p-4 flex justify-between items-center"
          >
            <span>Invitation Count</span>
            <span className="text-xl font-semibold">0</span>
          </div>

          <div
            style={{ backgroundColor: "#1B0831", borderWidth: 1 }}
            className=" rounded-xl p-4 flex justify-between items-center"
          >
            <span>Effective Invitation Count</span>
            <span className="text-xl font-semibold">0</span>
          </div>

          <div
            style={{ backgroundColor: "#1B0831", borderWidth: 1 }}
            className=" rounded-xl p-4 flex justify-between items-center"
          >
            <span>Invitation Total Bonus</span>
            <span className="text-xl font-semibold">₹0.00</span>
          </div>
        </div>

        {/* Invitation Record Section */}
        <div className="mb-4">
          <p className="mb-2">Invitation Record</p>
        </div>

        {/* Invitation Link Section */}
        <div className="mb-6">
          <p className="mb-2">Invitation Link</p>
          <div
            style={{ backgroundColor: "#1B0831", borderWidth: 1 }}
            className=" rounded-xl p-4 flex justify-between items-center"
          >
            <span className="opacity-50">...</span>
            <button className="p-1">
              <Copy size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Invitation Rules Table */}
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          <span className="font-medium">Invitation Rule</span>
        </div>

        {/* Instruction */}
        <div
          style={{ borderWidth: 1 }}
          className="bg-purple-900 rounded-lg p-3 mb-3"
        >
          <p>
            If you invite player A, within{" "}
            <span className="text-orange-400">6 Days</span>
          </p>
        </div>

        {/* Table */}
        <div className="border border-purple-800 rounded-lg overflow-hidden mb-4">
          {/* Table Header */}
          <div className="grid grid-cols-3 text-center border-b border-white-800">
            <div className="border-r border-purple-800 py-3"></div>
            <div className="border-r border-purple-800 py-3">When player A</div>
            <div className="py-3">You get Bonus</div>
          </div>

          {/* 1st Deposit */}
          <div className="grid grid-cols-3 border-b border-purple-800">
            <div className="border-r border-purple-800 flex flex-col justify-center items-center py-6 px-2">
              <span className="text-sm">1st</span>
              <span className="text-sm">deposit</span>
            </div>
            <div className="border-r border-purple-800 grid grid-rows-5">
              <div className="py-2 px-3 border-b border-purple-800 bg-purple-900"></div>
              <div className="py-2 px-3 border-b border-purple-800 bg-purple-900"></div>
              <div className="py-2 px-3 border-b border-purple-800 bg-purple-900"></div>
              <div className="py-2 px-3 border-b border-purple-800 bg-purple-900"></div>
              <div className="py-2 px-3 bg-purple-900"></div>
            </div>
            <div className="grid grid-rows-5">
              <div className="py-2 px-3 border-b border-purple-800 bg-purple-900 text-center">
                ₹108
              </div>
              <div className="py-2 px-3 border-b border-purple-800 bg-purple-900 text-center">
                ₹158
              </div>
              <div className="py-2 px-3 border-b border-purple-800 bg-purple-900 text-center">
                ₹208
              </div>
              <div className="py-2 px-3 border-b border-purple-800 bg-purple-900 text-center">
                ₹388
              </div>
              <div className="py-2 px-3 bg-purple-900 text-center">₹58</div>
            </div>
          </div>

          {/* 2nd Deposit */}
          <div className="grid grid-cols-3 border-b border-purple-800">
            <div className="border-r border-purple-800 flex flex-col justify-center items-center py-6 px-2">
              <span className="text-sm">2nd</span>
              <span className="text-sm">deposit</span>
            </div>
            <div className="border-r border-purple-800 grid grid-rows-5">
              <div className="py-2 px-3 border-b border-purple-800 bg-purple-900"></div>
              <div className="py-2 px-3 border-b border-purple-800 bg-purple-900"></div>
              <div className="py-2 px-3 border-b border-purple-800 bg-purple-900 text-sm">
                ₹5,000 ≤ Amount&lt;₹10,000
                <br />
                and Turnover ≥ ₹50,000
              </div>
              <div className="py-2 px-3 border-b border-purple-800 bg-purple-900 text-sm">
                Amount ≥ 10,000 and
                <br />
                Turnover ≥ ₹75,000
              </div>
              <div className="py-2 px-3 bg-purple-900 text-sm">
                1,000 ≤ Amount&lt;₹2,500 and
                <br />
                Turnover ≥ 15,000
              </div>
            </div>
            <div className="grid grid-rows-5">
              <div className="py-2 px-3 border-b border-purple-800 bg-purple-900 text-center">
                ₹108
              </div>
              <div className="py-2 px-3 border-b border-purple-800 bg-purple-900 text-center">
                ₹158
              </div>
              <div className="py-2 px-3 border-b border-purple-800 bg-purple-900 text-center">
                ₹208
              </div>
              <div className="py-2 px-3 border-b border-purple-800 bg-purple-900 text-center">
                ₹388
              </div>
              <div className="py-2 px-3 bg-purple-900 text-center">₹58</div>
            </div>
          </div>

          {/* 3rd Deposit */}
          <div className="grid grid-cols-3">
            <div className="border-r border-purple-800 flex flex-col justify-center items-center py-6 px-2">
              <span className="text-sm">3rd</span>
              <span className="text-sm">deposit</span>
            </div>
            <div className="border-r border-purple-800 grid grid-rows-4">
              <div className="py-2 px-3 border-b border-purple-800 bg-purple-900 text-sm">
                2,500 ≤ Amount&lt;₹5,000 and
                <br />
                Turnover ≥ ₹37,500
              </div>
              <div className="py-2 px-3 border-b border-purple-800 bg-purple-900 text-sm">
                ₹5,000 ≤ Amount&lt;₹10,000
                <br />
                and Turnover ≥ ₹75,000
              </div>
              <div className="py-2 px-3 border-b border-purple-800 bg-purple-900 text-sm">
                ₹10,000 ≤ Amount&lt;₹20,000
                <br />
                and Turnover ≥ 125,000
              </div>
              <div className="py-2 px-3 bg-purple-900 text-sm">
                Amount ≥ 20,000 and
                <br />
                Turnover ≥ ₹225,000
              </div>
            </div>
            <div className="grid grid-rows-4">
              <div className="py-2 px-3 border-b border-purple-800 bg-purple-900 text-center">
                ₹108
              </div>
              <div className="py-2 px-3 border-b border-purple-800 bg-purple-900 text-center">
                ₹158
              </div>
              <div className="py-2 px-3 border-b border-purple-800 bg-purple-900 text-center">
                ₹208
              </div>
              <div className="py-2 px-3 bg-purple-900 text-center">₹388</div>
            </div>
          </div>
        </div>

        {/* Footer Notes */}
        <div className="text-sm text-orange-400 mb-3">
          Each deposit can only get one bonus.
        </div>

        <div className="flex gap-2 text-sm mb-2">
          <span className="text-orange-400">◆</span>
          <p className="text-gray-300">
            eg: Player A 1st deposit ₹199.00 and turnover ₹1,000.00, you can't
            get bonus
          </p>
        </div>

        <div className="flex gap-2 text-sm mb-2">
          <span className="text-orange-400">◆</span>
          <p className="text-gray-300">
            the reward has no limitation, the more you invited the more rewards
            you will get it
          </p>
        </div>

        <div className="flex gap-2 text-sm">
          <span className="text-orange-400">◆</span>
          <p className="text-gray-300">
            If the conditions are met the rewards will be automatically credited
            to player's balance
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnerReward;
