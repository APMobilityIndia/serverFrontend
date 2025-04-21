import React from "react";
import {
  BsWallet2,
  BsCashStack,
  BsClockHistory,
  BsTrash,
} from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Wallet() {
  return (
    <div className="min-h-screen  flex-col items-center pt-8 pb-6">
      {/* Account Balance Section */}
      <div className="text-center mb-4">
        <div className="flex items-center justify-center">
          <span className="text-white text-xl mr-1">₹</span>
          <span className="text-white text-4xl font-semibold">0.00</span>
        </div>
        <p className="text-gray-300 text-sm">Account Balance</p>
      </div>

      {/* Amount Summary */}
      <div className="flex justify-between w-full px-12 mb-6">
        <div className="text-center">
          <p className="text-white text-lg font-semibold">₹0</p>
          <p className="text-gray-300 text-xs">Total Amount</p>
        </div>
        <div className="text-center">
          <p className="text-white text-lg font-semibold">₹0</p>
          <p className="text-gray-300 text-xs">Total Deposit Amount</p>
        </div>
      </div>

      {/* Wallet Card */}
      <div className="bg-purple-950 rounded-xl w-11/12 p-4 flex flex-col items-center">
        {/* Wallet Circles */}
        <div className="flex justify-between w-full px-4 mb-4">
          {/* Main Wallet */}
          <div className="flex flex-col items-center">
            <div className="relative w-20 h-20 mb-1">
              <div className="w-full h-full rounded-full border-4 border-gray-300 flex items-center justify-center">
                <span className="text-white text-xl font-bold">0%</span>
              </div>
            </div>
            <p className="text-white text-base font-semibold">₹0.00</p>
            <p className="text-gray-300 text-xs">Main Wallet</p>
          </div>

          {/* 3rd Party Wallet */}
          <div className="flex flex-col items-center">
            <div className="relative w-20 h-20 mb-1">
              <div className="w-full h-full rounded-full border-4 border-gray-300 flex items-center justify-center">
                <span className="text-white text-xl font-bold">0%</span>
              </div>
            </div>
            <p className="text-white text-base font-semibold">₹0.00</p>
            <p className="text-gray-300 text-xs">3rd Party Wallet</p>
          </div>
        </div>

        {/* Transfer Button */}
        <button className="bg-purple-700 text-white rounded-lg w-full py-3 mb-6">
          Main Wallet Transfer
        </button>

        {/* Action Buttons */}
        <div className="grid grid-cols-4 gap-2 w-full">
          <Link className="flex flex-col items-center" to="/walletdeposit">
            <div className="bg-gray-200 p-3 rounded-lg mb-1">
              <BsWallet2 className="text-purple-900 text-xl" />
            </div>
            <span className="text-gray-300 text-xs">Deposit</span>
          </Link>

          <Link className="flex flex-col items-center" to="/walletwithdraw">
            <div className="bg-gray-200 p-3 rounded-lg mb-1">
              <BsCashStack className="text-purple-900 text-xl" />
            </div>
            <span className="text-gray-300 text-xs">Withdraw</span>
          </Link>

          <Link
            className="flex flex-col items-center"
            to="/walletdeposithistory"
          >
            <div className="bg-gray-200 p-3 rounded-lg mb-1">
              <BsClockHistory className="text-purple-900 text-xl" />
            </div>
            <span className="text-gray-300 text-xs whitespace-nowrap">
              Deposit History
            </span>
          </Link>

          <Link
            className="flex flex-col items-center"
            to="/walletwithdrawhistory"
          >
            <div className="bg-gray-200 p-3 rounded-lg mb-1">
              <BsTrash className="text-purple-900 text-xl" />
            </div>
            <span className="text-gray-300 text-xs whitespace-nowrap">
              Withdrawal History
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
