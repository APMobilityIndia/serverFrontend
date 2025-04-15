import React from "react";
import {
  User,
  MessageSquare,
  Settings,
  Book,
  HelpCircle,
  Info,
  Grid,
  Monitor,
  Smartphone,
  Headphones,
  FileText,
  Award,
  ChevronRight,
} from "lucide-react";

import { FaRegCopy } from "react-icons/fa6";
import {
  BsWallet2,
  BsPiggyBank,
  BsCashCoin,
  BsVectorPen,
  BsController,
  BsClockHistory,
} from "react-icons/bs";

export default function Account() {
  return (
    <div
      style={{ backgroundColor: "#1A0B2E" }}
      className="flex flex-col min-h-screen  text-white"
    >
      {/* Profile header */}
      <div className="flex items-center p-4">
        <div className="mr-3">
          <img
            src="/assets/profile.png"
            alt="User avatar"
            className="rounded-full border-2 border-white w-18 h-18 object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-sm">MEMBERNNG9ADSF</p>
          <div style={{ backgroundColor: "#FF922E" }} className="">
            UID | 1597560
            <button style={{ backgroundColor: "transparent" }}>
              <FaRegCopy />
            </button>
          </div>
          <div>Last Login: 2025-04-11 13:05:49</div>
        </div>
      </div>
      <div className=" p-4" style={{ backgroundColor: "#1A0B2E" }}>
        {/* Balance Card */}
        <div
          className=" rounded-xl p-4 mb-4"
          style={{ backgroundColor: "#1A0B2E", borderWidth: 1 }}
        >
          <div className="mb-2">
            <p className="text-gray-300 text-sm">Total Balance</p>
            <h2 className="text-white text-2xl font-bold">₹0.00</h2>
          </div>

          <div
            className="h-px  my-4"
            style={{ backgroundColor: "#808080" }}
          ></div>

          <div className="flex justify-evenly">
            <div className="flex flex-col items-center">
              <div className="bg-white p-2 rounded-lg mb-1">
                <img src="/assets/ARWallet.png" className="h-8 w-9" />
              </div>
              <span className="text-white text-xs">ARWallet</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white p-2 rounded-lg mb-1">
                <img src="/assets/Deposit.png" className="h-8 w-9" />
              </div>
              <span className="text-white text-xs">Deposit</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white p-2 rounded-lg mb-1">
                <img src="/assets/Withdraw.png" className="h-8 w-9" />
              </div>
              <span className="text-white text-xs">Withdraw</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white p-2 rounded-lg mb-1">
                <img src="/assets/Vip.png" className="h-8 w-9" />
              </div>
              <span className="text-white text-xs">VIP</span>
            </div>
          </div>
        </div>

        {/* Action Cards - First Row */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div
            className="bg-transparent rounded-xl p-5 flex items-center"
            style={{ borderWidth: 1 }}
          >
            <div className="bg-white p-2 rounded-lg mr-3">
              <img src="assets/homenav.png" className="h-8 w-10" />
            </div>
            <div>
              <p className="text-white text-sm">Game History</p>
              <p className="text-gray-400 text-xs">My Game History</p>
            </div>
          </div>

          <div
            className="bg-transparent rounded-xl p-5 flex items-center"
            style={{ borderWidth: 1 }}
          >
            <div className="bg-white p-2 rounded-lg mr-3">
              <img src="assets/credit_card.png" className="h-8 w-10" />
            </div>
            <div>
              <p className="text-white text-sm">Transactions</p>
              <p className="text-gray-400 text-xs">My Transaction History</p>
            </div>
          </div>
        </div>

        {/* Action Cards - Second Row */}
        <div className="grid grid-cols-2 gap-4">
          <div
            className="bg-transparent rounded-xl p-5 flex items-center"
            style={{ borderWidth: 1 }}
          >
            <div className="bg-white p-2 rounded-lg mr-3">
              <img src="assets/Deposit.png" className="h-8 w-10" />
            </div>
            <div>
              <p className="text-white text-sm">Deposit</p>
              <p className="text-gray-400 text-xs">My Deposit History</p>
            </div>
          </div>

          <div
            className="bg-transparent rounded-xl p-5 flex items-center"
            style={{ borderWidth: 1 }}
          >
            <div className="bg-white p-2 rounded-lg mr-3">
              <img src="assets/Withdraw.png" className="h-8 w-10" />
            </div>
            <div>
              <p className="text-white text-sm">Withdraw</p>
              <p className="text-gray-400 text-xs">My Withdraw History</p>
            </div>
          </div>
        </div>
      </div>
      {/* Menu items */}
      <div className="flex-1">
        <div
          className="px-4 py-2 w-100 ml-6"
          style={{ borderWidth: 1, borderRadius: 12 }}
        >
          <div className="flex justify-between items-center py-3 border-b border-purple-800">
            <div className="flex items-center">
              <img src="assets/notification.png" className="h-5 w-5 mr-5" />
              <span>My Notifications</span>
            </div>
            <ChevronRight size={20} className="text-purple-300" />
          </div>

          <div className="flex justify-between items-center py-3 border-b border-purple-800">
            <div className="flex items-center">
              <img src="assets/gifts.png" className="h-5 w-5 mr-5" />
              <span>Gifts</span>
            </div>
            <ChevronRight size={20} className="text-purple-300" />
          </div>

          <div className="flex justify-between items-center py-3 border-b border-purple-800">
            <div className="flex items-center">
              <img src="assets/gameStat.png" className="h-5 w-5 mr-5" />
              <span>Game statistics</span>
            </div>
            <ChevronRight size={20} className="text-purple-300" />
          </div>

          <div className="flex justify-between items-center py-3">
            <div className="flex items-center">
              <img src="assets/langauge1.png" className="h-5 w-5 mr-5" />

              <span>Language</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-purple-300 mr-2">English</span>
              <ChevronRight size={20} className="text-purple-300" />
            </div>
          </div>
        </div>

        {/* Service center section */}
        <div className="px-4 mt-2 mb-6">
          <h2 className="text-sm font-semibold mb-2">SERVICE CENTER</h2>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center bg-purple-900 rounded-lg p-3">
              <HelpCircle size={24} className="mb-1" />
              <span className="text-xs">Help Center</span>
            </div>
            <div className="flex flex-col items-center bg-purple-900 rounded-lg p-3">
              <MessageSquare size={24} className="mb-1" />
              <span className="text-xs">Support</span>
            </div>
            <div className="flex flex-col items-center bg-purple-900 rounded-lg p-3">
              <FileText size={24} className="mb-1" />
              <span className="text-xs">Policies</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
