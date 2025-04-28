import React, { useEffect, useState } from "react";
import {
  BsWallet2,
  BsCashStack,
  BsClockHistory,
  BsTrash,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { shiftWinningToWallet } from "../redux/walletApi"; // ✅ Correct import
import { onWalletUpdate } from "../../../services/socket";

export default function Wallet() {
  const [walletBalance, setWalletBalance] = useState(0);

  useEffect(() => {
    onWalletUpdate((data) => {
      console.log("📥 Wallet Update:", data);
      setWalletBalance(data.newBalance); // Assume backend sends { newBalance: 1200 }
    });
  }, []);
  const dispatch = useDispatch();
  const [showTransferPopup, setShowTransferPopup] = useState(false);
  const [amount, setAmount] = useState("");

  const handleTransferSubmit = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount!");
      return;
    }

    try {
      const resultAction = await dispatch(
        shiftWinningToWallet(parseFloat(amount))
      );
      if (shiftWinningToWallet.fulfilled.match(resultAction)) {
        alert("Money shifted successfully!");
        setShowTransferPopup(false);
        setAmount("");
        // TODO: If you want, refresh wallet balance here
      } else {
        alert(resultAction.payload || "Failed to shift money");
      }
    } catch (error) {
      console.error("❌ Shift error", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex-col items-center pt-8 pb-6">
      {/* Wallet Header */}
      <div className="w-full bg-gradient-to-r from-[#1C012B] to-[#5E0391] px-6 py-10 -mt-10 mb-10">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center">
            <span className="text-white text-xl mr-1">₹</span>
            <span className="text-white text-4xl font-semibold">0.00</span>
          </div>
          <p className="text-gray-300 text-sm">Account Balance</p>
        </div>
        <div className="flex justify-between w-full px-6">
          <div className="text-center">
            <p className="text-white text-lg font-semibold">₹0</p>
            <p className="text-gray-300 text-xs">Total Amount</p>
          </div>
          <div className="text-center">
            <p className="text-white text-lg font-semibold">₹0</p>
            <p className="text-gray-300 text-xs">Total Deposit Amount</p>
          </div>
        </div>
      </div>

      {/* Wallet Main Card */}
      <div className="flex justify-center w-full">
        <div
          style={{
            backgroundColor: "#1B0831",
            borderWidth: 1,
            borderColor: "gray",
          }}
          className="rounded-xl w-11/12 p-4 flex flex-col items-center"
        >
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

          {/* Main Wallet Transfer Button */}
          <div
            onClick={() => setShowTransferPopup(true)}
            style={{ borderWidth: 0.3 }}
            className="w-full py-3 mb-6 rounded-3xl text-white text-center bg-gradient-to-r from-[#47115F] to-[#882377] cursor-pointer hover:opacity-90"
          >
            Main Wallet Transfer
          </div>

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

      {/* ✅ Popup Modal */}
      {showTransferPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-[#1B0831] border border-purple-700 rounded-xl p-6 w-80 flex flex-col items-center">
            <h2 className="text-lg font-bold text-white mb-4">
              Transfer Amount
            </h2>

            <input
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full mb-4 px-4 py-2 rounded-md border border-purple-500 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-700"
            />

            <div className="flex w-full justify-between">
              <button
                onClick={handleTransferSubmit}
                className="bg-gradient-to-r from-[#47115F] to-[#882377] px-4 py-2 rounded-lg text-white font-semibold hover:opacity-90"
              >
                Submit
              </button>

              <button
                onClick={() => setShowTransferPopup(false)}
                className="ml-2 bg-gray-600 px-4 py-2 rounded-lg text-white font-semibold hover:opacity-90"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
