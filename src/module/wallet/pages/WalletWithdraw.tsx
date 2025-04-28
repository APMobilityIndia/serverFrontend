import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const WalletWithdraw = () => {
  const navigate = useNavigate();

  const handleMethodClick = (label: any) => {
    if (label === "Bank Card") {
      navigate("/walletBankDetails"); // Update this to your actual route
    }
  };

  return (
    <div className="bg-[#1A0B2E] min-h-screen text-white px-4 py-2 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between py-2 border-b border-gray-600">
        {/* <FiArrowLeft size={20} />
        <span>Withdraw</span> */}
        <Link to="/walletwithdrawhistory">
          <span className="text-sm text-white ml-50">Withdraw History</span>
        </Link>
      </div>

      {/* Balance Card */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl text-white p-4 mt-4 shadow-md">
        <p className="text-sm">Balance</p>
        <h2 className="text-2xl font-bold">₹0.00</h2>
        <div className="mt-2 text-sm">**** ****</div>
      </div>

      <div className="text-xs text-center text-orange-300 mt-2 mb-4">
        Supports UPI For Fast Payment, and bonuses for Withdrawals.
      </div>

      {/* Method Selection */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { label: "Expert UPI-QR", img: "/assets/upi.png" },
          { label: "Bank Card", img: "/assets/card.png" },
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => handleMethodClick(item.label)}
            className="border border-gray-500 rounded-lg p-2 text-center"
          >
            <img
              src={item.img}
              alt={item.label}
              className="h-10 mx-auto mb-1"
            />
            <p className="text-sm">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Transaction Rules & Activation Banner */}
      <div className="flex items-center justify-between border border-gray-500 px-4 py-2 rounded-md mb-3">
        <span className="text-sm">AR Pay Transaction Rules</span>
        <button className="text-sm text-purple-300">Check</button>
      </div>

      <div className="flex items-center justify-between bg-[#2B1B43] px-4 py-2 rounded-md mb-4">
        <span className="text-sm">
          Your AR Wallet has not been activated yet.
        </span>
        <button className="bg-orange-500 px-4 py-1 text-sm rounded-full font-medium">
          Activate
        </button>
      </div>

      <Link
        className="flex items-center justify-between bg-[#2B1B43] px-4 py-2 rounded-md mb-4"
        to="/MoneyWithdraw"
      >
        <span className="text-sm">Withdraw money</span>
        <button className="bg-orange-500 px-4 py-1 text-sm rounded-full font-medium">
          Activate
        </button>
      </Link>

      {/* AR Wallet Info Box */}
      <div className="border border-gray-500 rounded-md p-4 mb-6">
        <h3 className="font-semibold text-base mb-2">AR Wallet</h3>
        <p className="text-xs leading-relaxed mb-3">
          AR Wallet is a third-party payment service platform that facilitates
          fast payments on the platform using ARB (digital currency).
          <br />
          Safe, stable and fast
          <br />
          <br />
          How to activate AR wallet &gt;
          <br />
          AR wallet features
          <br />
          You only need Jalwa to withdraw the balance to AR Wallet
          <br />
          <br />
          When you want to play games, you can quickly recharge to the Jalwa
          platform through AR Pay, with the recharge process taking only 5
          seconds to complete.
          <br />
          When you need to withdraw money to your bank card, you can quickly
          sell ARB through UPI in your AR wallet to get rupees, and you can also
          get additional rewards!
          <br />
          <br />
          This method reduces your bank transaction issues while you are
          playing, so you don't need to worry about bank limits. You just need
          to sell to UPI when you need to use the funds.
        </p>
        <button className="w-full bg-orange-500 py-2 rounded-full text-white font-semibold text-sm">
          Activate AR Wallet
        </button>
      </div>
    </div>
  );
};

export default WalletWithdraw;
